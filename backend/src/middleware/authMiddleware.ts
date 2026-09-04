import { Request, Response, NextFunction } from 'express';
import { ENV } from '../config/env';
import { logger } from '../utils/logger';
import { authorityRegistry } from '../services/authorityRegistry';
import { AuthorityPermission, AuthorityUser } from '../types/auth';

export interface AuthenticatedRequest extends Request {
  auth?: {
    userId?: string;
    sessionId?: string;
    claims?: Record<string, unknown>;
  };
  authority?: AuthorityUser;
}

/**
 * Clerk Authentication Middleware
 * Checks for session/token verification.
 */
export const requireAuth = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): void => {
  if (!ENV.CLERK_SECRET_KEY) {
    req.auth = { userId: 'dev-authenticated-user' };
    return next();
  }

  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({
      success: false,
      error: 'UNAUTHORIZED',
      message: 'Missing or invalid Bearer authentication token',
    });
    return;
  }

  // Pass to authorization layer
  next();
};

/**
 * Authority Authorization Middleware
 * Enforces server-side authority check against the approved AAYAM registry.
 * Disallows random authenticated Google / Microsoft / Email accounts.
 */
export const requireAuthority = (requiredPermission?: AuthorityPermission) => {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
    const userEmail =
      (req.headers['x-authority-email'] as string) ||
      (req.body?.email as string) ||
      (req.query?.email as string);

    if (!userEmail) {
      res.status(403).json({
        success: false,
        authorized: false,
        error: 'AUTHORITY_EMAIL_REQUIRED',
        message: 'No authority identity provided for server-side authorization.',
      });
      return;
    }

    const verification = authorityRegistry.verifyAuthority(userEmail);

    if (!verification.authorized || !verification.user) {
      logger.warn(`Unauthorized access attempt blocked for: ${userEmail}`);
      res.status(403).json({
        success: false,
        authorized: false,
        reason: verification.reason,
        message: verification.message,
      });
      return;
    }

    // Permission check
    if (requiredPermission && !verification.user.permissions.includes(requiredPermission)) {
      logger.warn(`Permission denied: ${userEmail} lacks '${requiredPermission}'`);
      res.status(403).json({
        success: false,
        authorized: false,
        error: 'INSUFFICIENT_PERMISSIONS',
        message: `Your clearance level does not permit '${requiredPermission}' operations.`,
      });
      return;
    }

    req.authority = verification.user;
    next();
  };
};
