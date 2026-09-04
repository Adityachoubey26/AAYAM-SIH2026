import mongoose from 'mongoose';
import { ENV } from './env';
import { logger } from '../utils/logger';

export const connectDatabase = async (): Promise<boolean> => {
  if (!ENV.MONGODB_URI) {
    logger.warn('MONGODB_URI environment variable not configured. Skipping database connection.');
    return false;
  }

  try {
    const conn = await mongoose.connect(ENV.MONGODB_URI);
    logger.info(`MongoDB Connected successfully: ${conn.connection.host}`);
    return true;
  } catch (error) {
    logger.error(`MongoDB connection error: ${error instanceof Error ? error.message : String(error)}`);
    return false;
  }
};

export const disconnectDatabase = async (): Promise<void> => {
  if (mongoose.connection.readyState !== 0) {
    await mongoose.disconnect();
    logger.info('MongoDB disconnected.');
  }
};
