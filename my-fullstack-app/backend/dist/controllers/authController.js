"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProfile = exports.getProfile = exports.login = exports.register = void 0;
const errorHandler_1 = require("@/middleware/errorHandler");
exports.register = (0, errorHandler_1.asyncHandler)(async (req, res, _) => {
    res.status(501).json({
        success: false,
        message: 'Registration endpoint not yet implemented'
    });
});
exports.login = (0, errorHandler_1.asyncHandler)(async (req, res, _) => {
    res.status(501).json({
        success: false,
        message: 'Login endpoint not yet implemented'
    });
});
exports.getProfile = (0, errorHandler_1.asyncHandler)(async (req, res, _) => {
    res.status(501).json({
        success: false,
        message: 'Get profile endpoint not yet implemented'
    });
});
exports.updateProfile = (0, errorHandler_1.asyncHandler)(async (req, res, _) => {
    res.status(501).json({
        success: false,
        message: 'Update profile endpoint not yet implemented'
    });
});
//# sourceMappingURL=authController.js.map