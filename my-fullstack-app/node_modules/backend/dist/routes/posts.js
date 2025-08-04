"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const postController_1 = require("@/controllers/postController");
const auth_1 = require("@/middleware/auth");
const validation_1 = require("@/middleware/validation");
const router = (0, express_1.Router)();
const postValidation = [
    (0, express_validator_1.body)('title').isLength({ min: 1, max: 200 }).trim(),
    (0, express_validator_1.body)('content').isLength({ min: 1 }),
    (0, express_validator_1.body)('tags').optional().isArray(),
];
const commentValidation = [
    (0, express_validator_1.body)('content').isLength({ min: 1, max: 1000 }).trim(),
];
router.get('/', auth_1.optionalAuth, postController_1.getAllPosts);
router.get('/:id', auth_1.optionalAuth, postController_1.getPostById);
router.post('/', auth_1.authenticateToken, postValidation, validation_1.validateRequest, postController_1.createPost);
router.put('/:id', auth_1.authenticateToken, postValidation, validation_1.validateRequest, postController_1.updatePost);
router.delete('/:id', auth_1.authenticateToken, postController_1.deletePost);
router.post('/:id/like', auth_1.authenticateToken, postController_1.likePost);
router.post('/:id/comments', auth_1.authenticateToken, commentValidation, validation_1.validateRequest, postController_1.addComment);
exports.default = router;
//# sourceMappingURL=posts.js.map