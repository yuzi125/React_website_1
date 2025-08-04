import { Request, Response, NextFunction } from 'express';
import logger from '@/config/logger';

export interface AppError extends Error {
  statusCode?: number;
  isOperational?: boolean;
}

export const errorHandler = (
  error: AppError,
  req: Request,
  res: Response,
  _: NextFunction
): void => {
  const statusCode = error.statusCode || 500;
  const message = error.message || 'Internal Server Error';
  
  // Log error
  logger.error(`${statusCode} - ${message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
  
  // Don't leak error details in production
  const isDevelopment = process.env.NODE_ENV === 'development';
  
  const errorResponse = {
    success: false,
    error: {
      message,
      ...(isDevelopment && { stack: error.stack }),
      ...(isDevelopment && { details: error })
    },
    timestamp: new Date().toISOString(),
    path: req.originalUrl,
    method: req.method
  };

  res.status(statusCode).json(errorResponse);
};

export const createError = (message: string, statusCode: number = 500): AppError => {
  const error: AppError = new Error(message);
  error.statusCode = statusCode;
  error.isOperational = true;
  return error;
};

export const asyncHandler = (fn: Function) => (req: Request, res: Response, next: NextFunction) => {
  Promise.resolve(fn(req, res, next)).catch(next);
}; 