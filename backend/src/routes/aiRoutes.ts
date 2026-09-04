import { Router } from 'express';

export const aiRoutes = Router();

aiRoutes.get('/status', (_req, res) => {
  res.json({ success: true, message: 'AI routes active' });
});
