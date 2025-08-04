"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addComment = exports.likePost = exports.deletePost = exports.updatePost = exports.createPost = exports.getPostById = exports.getAllPosts = void 0;
const errorHandler_1 = require("@/middleware/errorHandler");
exports.getAllPosts = (0, errorHandler_1.asyncHandler)(async (req, res, _) => {
    res.status(501).json({
        success: false,
        message: 'Get all posts endpoint not yet implemented'
    });
});
exports.getPostById = (0, errorHandler_1.asyncHandler)(async (req, res, _) => {
    res.status(501).json({
        success: false,
        message: 'Get post by ID endpoint not yet implemented'
    });
});
exports.createPost = (0, errorHandler_1.asyncHandler)(async (req, res, _) => {
    res.status(501).json({
        success: false,
        message: 'Create post endpoint not yet implemented'
    });
});
exports.updatePost = (0, errorHandler_1.asyncHandler)(async (req, res, _) => {
    res.status(501).json({
        success: false,
        message: 'Update post endpoint not yet implemented'
    });
});
exports.deletePost = (0, errorHandler_1.asyncHandler)(async (req, res, _) => {
    res.status(501).json({
        success: false,
        message: 'Delete post endpoint not yet implemented'
    });
});
exports.likePost = (0, errorHandler_1.asyncHandler)(async (req, res, _) => {
    res.status(501).json({
        success: false,
        message: 'Like post endpoint not yet implemented'
    });
});
exports.addComment = (0, errorHandler_1.asyncHandler)(async (req, res, _) => {
    res.status(501).json({
        success: false,
        message: 'Add comment endpoint not yet implemented'
    });
});
//# sourceMappingURL=postController.js.map