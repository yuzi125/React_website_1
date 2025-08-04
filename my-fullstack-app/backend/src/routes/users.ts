import { Router } from 'express';
import { getAllUsers, getUserById, updateUser, deleteUser } from '@/controllers/userController';
import { authenticateToken, requireAdmin } from '@/middleware/auth';

const router = Router();

// All routes require authentication
router.use(authenticateToken);

// User routes
router.get('/', requireAdmin, getAllUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router; 