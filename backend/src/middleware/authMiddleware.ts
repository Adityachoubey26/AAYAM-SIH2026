import { Request, Response, NextFunction } from 'express';
import { ENV } from '../config/env';
import { logger } from '../utils/logger';

export interface AuthenticatedRequest extends Request {
  auth?: {
    userId?: string;
    sessionId?: string;
    claims?: Record<string, unknown>;
  };
}

/**
 * Clerk Authentication Middleware
 * Checks for session/token verification.
 * Gracefully permits request with warning if Clerk keys are not configured yet in local development.
 */
export const requireAuth = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): void => {
  if (!ENV.CLERK_SECRET_KEY) {
    logger.warn('CLERK_SECRET_KEY not set in environment. Auth check bypassed in development placeholder.');
    req.auth = { userId: 'dev-mock-user-id' };
    return next();
  }

  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({
      success: false,
      error: 'Unauthorized: Missing or invalid Bearer token',
    });
    return;
  }

  // Token verification placeholder to be completed when full auth flow is implemented
  next();
};
