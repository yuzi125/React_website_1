import { PrismaClient } from '@prisma/client';
import logger from './logger';

let prisma: PrismaClient;

declare global {
  var __prisma: PrismaClient | undefined;
}

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.__prisma) {
    global.__prisma = new PrismaClient({
      log: ['query', 'error', 'warn'],
    });
  }
  prisma = global.__prisma;
}

export const connectDatabase = async (): Promise<void> => {
  try {
    await prisma.$connect();
    logger.info('✅ Connected to PostgreSQL database');
  } catch (error) {
    logger.error('❌ Failed to connect to database:', error);
    process.exit(1);
  }
};

export const disconnectDatabase = async (): Promise<void> => {
  try {
    await prisma.$disconnect();
    logger.info('🔌 Disconnected from PostgreSQL database');
  } catch (error) {
    logger.error('❌ Error disconnecting from database:', error);
  }
};

export default prisma; 