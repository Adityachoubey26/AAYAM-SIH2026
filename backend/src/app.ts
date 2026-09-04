import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

import { ENV } from './config/env';
import { notFound } from './middleware/notFound';
import { errorHandler } from './middleware/errorHandler';

import { authRoutes } from './routes/authRoutes';
import { habitationRoutes } from './routes/habitationRoutes';
import { hazardRoutes } from './routes/hazardRoutes';
import { riskRoutes } from './routes/riskRoutes';
import { relocationRoutes } from './routes/relocationRoutes';
import { aiRoutes } from './routes/aiRoutes';

const app: Application = express();

// Security & utility middleware
app.use(helmet());
app.use(
  cors({
    origin: [ENV.CLIENT_URL, 'http://localhost:3000', 'http://127.0.0.1:3000'],
    credentials: true,
  })
);
app.use(morgan(ENV.NODE_ENV === 'production' ? 'combined' : 'dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Health check endpoint
app.get('/api/health', (_req, res) => {
  res.status(200).json({
    status: 'ok',
    project: 'AAYAM-SIH2026',
    problemStatement: 'SIH26191',
    timestamp: new Date().toISOString(),
  });
});

// Mount module API routes
app.use('/api/auth', authRoutes);
app.use('/api/habitations', habitationRoutes);
app.use('/api/hazards', hazardRoutes);
app.use('/api/risk', riskRoutes);
app.use('/api/relocation', relocationRoutes);
app.use('/api/ai', aiRoutes);

// Unmatched route handling & global error handler
app.use(notFound);
app.use(errorHandler);

export { app };
export default app;
