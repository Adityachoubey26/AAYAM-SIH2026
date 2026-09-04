import { Router } from 'express';

export const relocationRoutes = Router();

relocationRoutes.get('/status', (_req, res) => {
  res.json({ success: true, message: 'Relocation routes active' });
});
