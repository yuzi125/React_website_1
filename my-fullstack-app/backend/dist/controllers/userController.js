"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUserById = exports.getAllUsers = void 0;
const errorHandler_1 = require("@/middleware/errorHandler");
exports.getAllUsers = (0, errorHandler_1.asyncHandler)(async (req, res, _) => {
    res.status(501).json({
        success: false,
        message: 'Get all users endpoint not yet implemented'
    });
});
exports.getUserById = (0, errorHandler_1.asyncHandler)(async (req, res, _) => {
    res.status(501).json({
        success: false,
        message: 'Get user by ID endpoint not yet implemented'
    });
});
exports.updateUser = (0, errorHandler_1.asyncHandler)(async (req, res, _) => {
    res.status(501).json({
        success: false,
        message: 'Update user endpoint not yet implemented'
    });
});
exports.deleteUser = (0, errorHandler_1.asyncHandler)(async (req, res, _) => {
    res.status(501).json({
        success: false,
        message: 'Delete user endpoint not yet implemented'
    });
});
//# sourceMappingURL=userController.js.map