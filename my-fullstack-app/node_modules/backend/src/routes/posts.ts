import { Router } from 'express';
import { body } from 'express-validator';
import { 
  getAllPosts, 
  getPostById, 
  createPost, 
  updatePost, 
  deletePost,
  likePost,
  addComment 
} from '@/controllers/postController';
import { authenticateToken, optionalAuth } from '@/middleware/auth';
import { validateRequest } from '@/middleware/validation';

const router = Router();

// Post validation rules
const postValidation = [
  body('title').isLength({ min: 1, max: 200 }).trim(),
  body('content').isLength({ min: 1 }),
  body('tags').optional().isArray(),
];

// Comment validation
const commentValidation = [
  body('content').isLength({ min: 1, max: 1000 }).trim(),
];

// Public routes
router.get('/', optionalAuth, getAllPosts);
router.get('/:id', optionalAuth, getPostById);

// Protected routes
router.post('/', authenticateToken, postValidation, validateRequest, createPost);
router.put('/:id', authenticateToken, postValidation, validateRequest, updatePost);
router.delete('/:id', authenticateToken, deletePost);
router.post('/:id/like', authenticateToken, likePost);
router.post('/:id/comments', authenticateToken, commentValidation, validateRequest, addComment);

export default router; 