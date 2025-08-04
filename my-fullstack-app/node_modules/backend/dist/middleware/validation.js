"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = void 0;
const express_validator_1 = require("express-validator");
const errorHandler_1 = require("./errorHandler");
const validateRequest = (req, _, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        const errorMessages = errors.array().map(error => error.msg).join(', ');
        return next((0, errorHandler_1.createError)(`Validation error: ${errorMessages}`, 400));
    }
    next();
};
exports.validateRequest = validateRequest;
//# sourceMappingURL=validation.js.map