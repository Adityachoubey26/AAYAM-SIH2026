import { Router } from 'express';
import { verifyAuthority, requestAccess, getAllowlist } from '../controllers/authController';

export const authRoutes = Router();

// Health/status check for auth service
authRoutes.get('/status', (_req, res) => {
  res.json({ success: true, message: 'AAYAM Authority Authorization Service Active' });
});

// Server-side authority verification endpoint
authRoutes.post('/verify-authority', verifyAuthority);

// Access request submission for unapproved users
authRoutes.post('/request-access', requestAccess);

// Audit allowlist for authorities
authRoutes.get('/allowlist', getAllowlist);

export default authRoutes;
