import { Router } from 'express';

export const habitationRoutes = Router();

habitationRoutes.get('/status', (_req, res) => {
  res.json({ success: true, message: 'Habitation routes active' });
});
