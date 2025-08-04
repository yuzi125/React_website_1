import { Router } from 'express';
import { body } from 'express-validator';
import { register, login, getProfile, updateProfile } from '@/controllers/authController';
import { validateRequest } from '@/middleware/validation';
import { authenticateToken } from '@/middleware/auth';

const router = Router();

// Registration validation rules
const registerValidation = [
  body('email').isEmail().normalizeEmail(),
  body('username').isLength({ min: 3, max: 30 }).trim(),
  body('password').isLength({ min: 6 }),
  body('firstName').optional().isLength({ min: 1, max: 50 }).trim(),
  body('lastName').optional().isLength({ min: 1, max: 50 }).trim(),
];

// Login validation rules
const loginValidation = [
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 1 }),
];

// Routes
router.post('/register', registerValidation, validateRequest, register);
router.post('/login', loginValidation, validateRequest, login);
router.get('/profile', authenticateToken, getProfile);
router.put('/profile', authenticateToken, updateProfile);

export default router; 