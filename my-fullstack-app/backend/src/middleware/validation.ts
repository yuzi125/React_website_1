import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { createError } from './errorHandler';

export const validateRequest = (req: Request, _: Response, next: NextFunction): void => {
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map(error => error.msg).join(', ');
    return next(createError(`Validation error: ${errorMessages}`, 400));
  }
  
  next();
}; 