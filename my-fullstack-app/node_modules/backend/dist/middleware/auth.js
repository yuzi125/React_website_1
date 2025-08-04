"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAdmin = exports.optionalAuth = exports.authenticateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const errorHandler_1 = require("./errorHandler");
const authenticateToken = (req, _, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return next((0, errorHandler_1.createError)('Access token is required', 401));
    }
    try {
        const secret = process.env.JWT_SECRET || 'default-secret';
        const decoded = jsonwebtoken_1.default.verify(token, secret);
        req.user = decoded;
        next();
    }
    catch (error) {
        next((0, errorHandler_1.createError)('Invalid token', 403));
    }
};
exports.authenticateToken = authenticateToken;
const optionalAuth = (req, _, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token) {
        try {
            const secret = process.env.JWT_SECRET || 'default-secret';
            const decoded = jsonwebtoken_1.default.verify(token, secret);
            req.user = decoded;
        }
        catch (error) {
        }
    }
    next();
};
exports.optionalAuth = optionalAuth;
const requireAdmin = (req, _, next) => {
    if (!req.user) {
        return next((0, errorHandler_1.createError)('Authentication required', 401));
    }
    if (req.user.role !== 'ADMIN') {
        return next((0, errorHandler_1.createError)('Admin access required', 403));
    }
    next();
};
exports.requireAdmin = requireAdmin;
//# sourceMappingURL=auth.js.map