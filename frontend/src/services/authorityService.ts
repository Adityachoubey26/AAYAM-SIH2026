import axios from 'axios';
import { ENV } from '../config/env';

export interface AuthorityProfile {
  id: string;
  email: string;
  fullName: string;
  role: 'SUPER_ADMIN' | 'STATE_AUTHORITY' | 'DISTRICT_MAGISTRATE' | 'FIELD_OFFICER' | 'OBSERVER';
  jurisdiction: string;
  badgeNumber: string;
  clearanceLevel: 'LEVEL_1' | 'LEVEL_2' | 'LEVEL_3' | 'LEVEL_4';
  isApproved: boolean;
  status: 'ACTIVE' | 'PENDING_APPROVAL' | 'SUSPENDED';
  permissions: string[];
}

export interface AuthorityVerificationResponse {
  authorized: boolean;
  reason?: 'APPROVED' | 'PENDING_APPROVAL' | 'NOT_REGISTERED' | 'SUSPENDED';
  user?: AuthorityProfile;
  message: string;
}

const API_URL = ENV.API_BASE_URL || 'http://localhost:5000/api';

class AuthorityService {
  private cachedProfile: AuthorityProfile | null = null;

  /**
   * Verify server-side whether an authenticated user has disaster authority clearance
   */
  public async verifyAuthority(email: string, clerkUserId?: string): Promise<AuthorityVerificationResponse> {
    if (!email) {
      return {
        authorized: false,
        reason: 'NOT_REGISTERED',
        message: 'No email provided for authority verification.',
      };
    }

    try {
      const response = await axios.post<AuthorityVerificationResponse>(
        `${API_URL}/auth/verify-authority`,
        { email: email.trim().toLowerCase(), clerkUserId },
        { headers: { 'Content-Type': 'application/json' }, timeout: 8000 }
      );

      if (response.data.authorized && response.data.user) {
        this.cachedProfile = response.data.user;
        sessionStorage.setItem('aayam_authority_profile', JSON.stringify(response.data.user));
        return response.data;
      }

      return {
        authorized: false,
        reason: response.data.reason || 'NOT_REGISTERED',
        message: response.data.message || 'Account is not authorized for Authority Command.',
      };
    } catch (error: any) {
      if (error.response?.status === 403) {
        return {
          authorized: false,
          reason: error.response.data?.reason || 'NOT_REGISTERED',
          message:
            error.response.data?.message ||
            'Access Restricted: Account is not on the approved AAYAM Disaster Authority Registry.',
        };
      }

      // Fallback for local testing when backend is restarting
      console.warn('Authority verification service warning:', error.message);
      const stored = sessionStorage.getItem('aayam_authority_profile');
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          if (parsed.email?.toLowerCase() === email.toLowerCase()) {
            return { authorized: true, reason: 'APPROVED', user: parsed, message: 'Cached clearance verified.' };
          }
        } catch {
          // ignore
        }
      }

      return {
        authorized: false,
        reason: 'NOT_REGISTERED',
        message: 'Authorization verification failed. Please contact NDMA/SDMA administrator.',
      };
    }
  }

  /**
   * Submit an authority clearance request for review
   */
  public async requestAccess(payload: {
    email: string;
    fullName: string;
    agency: string;
    designation: string;
    jurisdiction: string;
    badgeNumber?: string;
    reasonForAccess: string;
  }): Promise<{ success: boolean; message: string }> {
    try {
      const res = await axios.post(`${API_URL}/auth/request-access`, payload, {
        headers: { 'Content-Type': 'application/json' },
      });
      return { success: true, message: res.data.message };
    } catch (error: any) {
      return {
        success: false,
        message: error.response?.data?.message || 'Failed to submit clearance request.',
      };
    }
  }

  /**
   * Get currently active authority profile
   */
  public getActiveProfile(): AuthorityProfile | null {
    if (this.cachedProfile) return this.cachedProfile;
    const stored = sessionStorage.getItem('aayam_authority_profile');
    if (stored) {
      try {
        this.cachedProfile = JSON.parse(stored);
        return this.cachedProfile;
      } catch {
        return null;
      }
    }
    return null;
  }

  /**
   * Clear authority cache upon sign-out
   */
  public clearProfile(): void {
    this.cachedProfile = null;
    sessionStorage.removeItem('aayam_authority_profile');
  }
}

export const authorityService = new AuthorityService();
