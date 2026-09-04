import { app } from './app';
import { ENV } from './config/env';
import { connectDatabase, disconnectDatabase } from './config/database';
import { logger } from './utils/logger';

const PORT = ENV.PORT;

const server = app.listen(PORT, async () => {
  logger.info(`Server running in ${ENV.NODE_ENV} mode on port ${PORT}`);
  logger.info(`Health check: http://localhost:${PORT}/api/health`);

  // Attempt database connection only if configured
  await connectDatabase();
});

const gracefulShutdown = async (signal: string) => {
  logger.info(`Received ${signal}. Shutting down server gracefully...`);
  server.close(async () => {
    logger.info('HTTP server closed.');
    await disconnectDatabase();
    process.exit(0);
  });

  // Force shutdown after timeout
  setTimeout(() => {
    logger.error('Forcefully terminating process after timeout.');
    process.exit(1);
  }, 10000);
};

process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));
