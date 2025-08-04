"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncHandler = exports.createError = exports.errorHandler = void 0;
const logger_1 = __importDefault(require("@/config/logger"));
const errorHandler = (error, req, res, _) => {
    const statusCode = error.statusCode || 500;
    const message = error.message || 'Internal Server Error';
    logger_1.default.error(`${statusCode} - ${message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
    const isDevelopment = process.env.NODE_ENV === 'development';
    const errorResponse = {
        success: false,
        error: {
            message,
            ...(isDevelopment && { stack: error.stack }),
            ...(isDevelopment && { details: error })
        },
        timestamp: new Date().toISOString(),
        path: req.originalUrl,
        method: req.method
    };
    res.status(statusCode).json(errorResponse);
};
exports.errorHandler = errorHandler;
const createError = (message, statusCode = 500) => {
    const error = new Error(message);
    error.statusCode = statusCode;
    error.isOperational = true;
    return error;
};
exports.createError = createError;
const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};
exports.asyncHandler = asyncHandler;
//# sourceMappingURL=errorHandler.js.map