import { Router } from 'express';

export const riskRoutes = Router();

riskRoutes.get('/status', (_req, res) => {
  res.json({ success: true, message: 'Risk routes active' });
});
