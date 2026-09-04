import { Router } from 'express';

export const hazardRoutes = Router();

hazardRoutes.get('/status', (_req, res) => {
  res.json({ success: true, message: 'Hazard routes active' });
});
