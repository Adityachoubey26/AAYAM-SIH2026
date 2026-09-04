import { Router } from 'express';

export const authRoutes = Router();

authRoutes.get('/status', (_req, res) => {
  res.json({ success: true, message: 'Auth route active' });
});
