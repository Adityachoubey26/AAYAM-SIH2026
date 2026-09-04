import { Request, Response } from 'express';
import { authorityRegistry } from '../services/authorityRegistry';
import { ENV } from '../config/env';
import { logger } from '../utils/logger';

/**
 * Verify if an authenticated Clerk user is an authorized AAYAM authority
 * POST /api/auth/verify-authority
 */
export const verifyAuthority = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, clerkUserId } = req.body;

    if (!email) {
      res.status(400).json({
        success: false,
        authorized: false,
        error: 'EMAIL_REQUIRED',
        message: 'An authenticated email address is required to verify authority clearance.',
      });
      return;
    }

    logger.info(`Checking authority authorization for email: ${email} (Clerk ID: ${clerkUserId || 'N/A'})`);

    const verification = authorityRegistry.verifyAuthority(email);

    if (!verification.authorized) {
      res.status(403).json({
        success: false,
        authorized: false,
        reason: verification.reason,
        message: verification.message,
        email,
      });
      return;
    }

    res.status(200).json({
      success: true,
      authorized: true,
      reason: 'APPROVED',
      user: verification.user,
      message: verification.message,
    });
  } catch (error: any) {
    logger.error('Error during authority verification:', error);
    res.status(500).json({
      success: false,
      authorized: false,
      error: 'SERVER_ERROR',
      message: 'Internal authorization service error. Please try again later.',
    });
  }
};

/**
 * Submit an access request for unapproved accounts
 * POST /api/auth/request-access
 */
export const requestAccess = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, fullName, agency, designation, jurisdiction, badgeNumber, reasonForAccess } = req.body;

    if (!email || !fullName || !agency) {
      res.status(400).json({
        success: false,
        error: 'MISSING_FIELDS',
        message: 'Email, Full Name, and Agency/Department are required.',
      });
      return;
    }

    const result = authorityRegistry.submitAccessRequest({
      email,
      fullName,
      agency,
      designation: designation || 'Officer',
      jurisdiction: jurisdiction || 'Designated Command Area',
      badgeNumber,
      reasonForAccess: reasonForAccess || 'Disaster Monitoring Operations',
    });

    res.status(200).json({
      success: true,
      message: result.message,
    });
  } catch (error: any) {
    logger.error('Error submitting access request:', error);
    res.status(500).json({
      success: false,
      error: 'SERVER_ERROR',
      message: 'Failed to submit clearance request.',
    });
  }
};

/**
 * List approved authorities (for admin overview and verification audit)
 * GET /api/auth/allowlist
 */
export const getAllowlist = async (_req: Request, res: Response): Promise<void> => {
  try {
    const authorities = authorityRegistry.listApprovedAuthorities();
    res.status(200).json({
      success: true,
      count: authorities.length,
      data: authorities.map((a) => ({
        id: a.id,
        email: a.email,
        fullName: a.fullName,
        role: a.role,
        jurisdiction: a.jurisdiction,
        badgeNumber: a.badgeNumber,
        clearanceLevel: a.clearanceLevel,
        status: a.status,
      })),
    });
  } catch (error: any) {
    logger.error('Error retrieving allowlist:', error);
    res.status(500).json({
      success: false,
      error: 'SERVER_ERROR',
      message: 'Failed to retrieve authority allowlist.',
    });
  }
};
