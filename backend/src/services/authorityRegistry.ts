import { AuthorityUser, AuthorityVerificationResult, AccessRequestPayload } from '../types/auth';
import { logger } from '../utils/logger';

/**
 * AAYAM Authority Registry & Authorization Engine
 * Enforces server-side authorization separate from Clerk identity verification.
 * Pre-configured with authorized disaster-management personnel registry.
 */
class AuthorityRegistryService {
  // Initial approved authority registry (persisted in-memory; seamlessly bridges to MongoDB in future steps)
  private approvedAuthorities: Map<string, AuthorityUser> = new Map();
  private pendingRequests: Map<string, AccessRequestPayload & { requestedAt: string; status: string }> = new Map();

  constructor() {
    this.seedInitialAuthorities();
  }

  private seedInitialAuthorities(): void {
    const seedUsers: AuthorityUser[] = [
      {
        id: 'AUTH-CMD-001',
        email: 'officer.command@sdma.gov.in',
        fullName: 'R. Sharma',
        role: 'STATE_AUTHORITY',
        jurisdiction: 'Uttarakhand State Command (SEOC)',
        badgeNumber: 'SDMA-UK-26191',
        clearanceLevel: 'LEVEL_4',
        isApproved: true,
        status: 'ACTIVE',
        permissions: [
          'dashboard:view',
          'risk:view',
          'risk:manage',
          'habitations:view',
          'habitations:manage',
          'relocation:plan',
          'relocation:approve',
          'alerts:broadcast',
          'users:manage',
        ],
        approvedAt: '2026-01-15T00:00:00Z',
        approvedBy: 'NDMA_DIRECTORATE',
      },
      {
        id: 'AUTH-CMD-002',
        email: 'dm.chamoli@nic.in',
        fullName: 'District Magistrate Chamoli',
        role: 'DISTRICT_MAGISTRATE',
        jurisdiction: 'Chamoli & Joshimath Sector',
        badgeNumber: 'DDMA-CH-04',
        clearanceLevel: 'LEVEL_3',
        isApproved: true,
        status: 'ACTIVE',
        permissions: [
          'dashboard:view',
          'risk:view',
          'habitations:view',
          'habitations:manage',
          'relocation:plan',
          'alerts:broadcast',
        ],
        approvedAt: '2026-02-01T00:00:00Z',
        approvedBy: 'SDMA_UK',
      },
      {
        id: 'AUTH-CMD-003',
        email: 'ndma.officer@nic.in',
        fullName: 'NDMA Geospatial Operations Officer',
        role: 'SUPER_ADMIN',
        jurisdiction: 'National High-Altitude Triage Directorate',
        badgeNumber: 'NDMA-HQ-001',
        clearanceLevel: 'LEVEL_4',
        isApproved: true,
        status: 'ACTIVE',
        permissions: [
          'dashboard:view',
          'risk:view',
          'risk:manage',
          'habitations:view',
          'habitations:manage',
          'relocation:plan',
          'relocation:approve',
          'alerts:broadcast',
          'users:manage',
        ],
        approvedAt: '2026-01-01T00:00:00Z',
        approvedBy: 'MINISTRY_OF_HOME_AFFAIRS',
      },
      {
        id: 'AUTH-DEV-004',
        email: 'aditya.choubey@aayam.gov.in',
        fullName: 'Aditya Choubey (Project Lead)',
        role: 'SUPER_ADMIN',
        jurisdiction: 'SIH26191 AAYAM Command Lead',
        badgeNumber: 'AAYAM-HQ-01',
        clearanceLevel: 'LEVEL_4',
        isApproved: true,
        status: 'ACTIVE',
        permissions: [
          'dashboard:view',
          'risk:view',
          'risk:manage',
          'habitations:view',
          'habitations:manage',
          'relocation:plan',
          'relocation:approve',
          'alerts:broadcast',
          'users:manage',
        ],
        approvedAt: '2026-01-01T00:00:00Z',
        approvedBy: 'SYSTEM',
      },
    ];

    seedUsers.forEach((user) => {
      this.approvedAuthorities.set(user.email.toLowerCase(), user);
    });

    // Support configurable authority emails from environment variable
    const envApproved = process.env.AUTHORITY_APPROVED_EMAILS;
    if (envApproved) {
      envApproved.split(',').forEach((email, idx) => {
        const clean = email.trim().toLowerCase();
        if (clean && !this.approvedAuthorities.has(clean)) {
          this.approvedAuthorities.set(clean, {
            id: `AUTH-ENV-${idx + 100}`,
            email: clean,
            fullName: clean.split('@')[0].replace('.', ' ').toUpperCase(),
            role: 'STATE_AUTHORITY',
            jurisdiction: 'Designated Command Sector',
            badgeNumber: `NDMA-ENV-${idx + 1}`,
            clearanceLevel: 'LEVEL_3',
            isApproved: true,
            status: 'ACTIVE',
            permissions: [
              'dashboard:view',
              'risk:view',
              'habitations:view',
              'relocation:plan',
              'alerts:broadcast',
            ],
            approvedAt: new Date().toISOString(),
            approvedBy: 'ENV_CONFIG',
          });
        }
      });
    }

    logger.info(`Authority Registry initialized with ${this.approvedAuthorities.size} approved authority profiles.`);
  }

  /**
   * Verify whether an authenticated email belongs to an approved authority
   */
  public verifyAuthority(email: string): AuthorityVerificationResult {
    if (!email) {
      return {
        authorized: false,
        reason: 'NOT_REGISTERED',
        message: 'No email address provided for authorization check.',
      };
    }

    const normalizedEmail = email.trim().toLowerCase();
    const user = this.approvedAuthorities.get(normalizedEmail);

    if (!user) {
      // Check if user has a pending clearance request
      if (this.pendingRequests.has(normalizedEmail)) {
        return {
          authorized: false,
          reason: 'PENDING_APPROVAL',
          message: 'Authority access request is pending review by the State Disaster Management Directorate.',
        };
      }

      return {
        authorized: false,
        reason: 'NOT_REGISTERED',
        message: 'This account is not authorized for the AAYAM Authority Platform. Disaster Command clearance required.',
      };
    }

    if (!user.isApproved || user.status !== 'ACTIVE') {
      return {
        authorized: false,
        reason: user.status === 'SUSPENDED' ? 'SUSPENDED' : 'PENDING_APPROVAL',
        user,
        message: `Account status is ${user.status}. Access to Authority Command is restricted.`,
      };
    }

    return {
      authorized: true,
      reason: 'APPROVED',
      user,
      message: 'Authority clearance verified. Access granted to AAYAM Disaster Intelligence Platform.',
    };
  }

  /**
   * Submit an authority clearance request
   */
  public submitAccessRequest(payload: AccessRequestPayload): { success: boolean; message: string } {
    const normalizedEmail = payload.email.trim().toLowerCase();
    
    if (this.approvedAuthorities.has(normalizedEmail)) {
      return {
        success: true,
        message: 'Account is already approved and registered in the authority directory.',
      };
    }

    this.pendingRequests.set(normalizedEmail, {
      ...payload,
      requestedAt: new Date().toISOString(),
      status: 'PENDING_REVIEW',
    });

    logger.info(`New authority clearance request submitted for: ${normalizedEmail} (${payload.agency})`);

    return {
      success: true,
      message: 'Your clearance request has been routed to the State Disaster Management Directorate for verification.',
    };
  }

  /**
   * Dynamically approve a user (e.g. from future admin panel)
   */
  public approveAuthority(
    email: string,
    details: { fullName: string; role: AuthorityUser['role']; jurisdiction: string; badgeNumber: string }
  ): AuthorityUser {
    const normalizedEmail = email.trim().toLowerCase();
    const newUser: AuthorityUser = {
      id: `AUTH-DYN-${Date.now().toString().slice(-4)}`,
      email: normalizedEmail,
      fullName: details.fullName,
      role: details.role,
      jurisdiction: details.jurisdiction,
      badgeNumber: details.badgeNumber,
      clearanceLevel: details.role === 'SUPER_ADMIN' ? 'LEVEL_4' : 'LEVEL_3',
      isApproved: true,
      status: 'ACTIVE',
      permissions: [
        'dashboard:view',
        'risk:view',
        'habitations:view',
        'relocation:plan',
        'alerts:broadcast',
      ],
      approvedAt: new Date().toISOString(),
      approvedBy: 'ADMIN_CONSOLE',
    };

    this.approvedAuthorities.set(normalizedEmail, newUser);
    this.pendingRequests.delete(normalizedEmail);
    logger.info(`Authority user approved: ${normalizedEmail} with role: ${details.role}`);
    return newUser;
  }

  /**
   * List all currently approved authority accounts
   */
  public listApprovedAuthorities(): AuthorityUser[] {
    return Array.from(this.approvedAuthorities.values());
  }

  /**
   * List all pending access requests
   */
  public listPendingRequests() {
    return Array.from(this.pendingRequests.values());
  }
}

export const authorityRegistry = new AuthorityRegistryService();
