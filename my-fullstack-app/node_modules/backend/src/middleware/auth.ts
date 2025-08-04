import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { createError } from './errorHandler';

interface JwtPayload {
  userId: string;
  email: string;
  role: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}

export const authenticateToken = (req: Request, _: Response, next: NextFunction): void => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return next(createError('Access token is required', 401));
  }

  try {
    const secret = process.env.JWT_SECRET || 'default-secret';
    const decoded = jwt.verify(token, secret) as JwtPayload;
    req.user = decoded;
    next();
  } catch (error) {
    next(createError('Invalid token', 403));
  }
};

export const optionalAuth = (req: Request, _: Response, next: NextFunction): void => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token) {
    try {
      const secret = process.env.JWT_SECRET || 'default-secret';
      const decoded = jwt.verify(token, secret) as JwtPayload;
      req.user = decoded;
    } catch (error) {
      // Ignore invalid tokens for optional auth
    }
  }
  
  next();
};

export const requireAdmin = (req: Request, _: Response, next: NextFunction): void => {
  if (!req.user) {
    return next(createError('Authentication required', 401));
  }

  if (req.user.role !== 'ADMIN') {
    return next(createError('Admin access required', 403));
  }

  next();
}; 