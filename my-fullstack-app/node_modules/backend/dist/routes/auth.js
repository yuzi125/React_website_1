"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const authController_1 = require("@/controllers/authController");
const validation_1 = require("@/middleware/validation");
const auth_1 = require("@/middleware/auth");
const router = (0, express_1.Router)();
const registerValidation = [
    (0, express_validator_1.body)('email').isEmail().normalizeEmail(),
    (0, express_validator_1.body)('username').isLength({ min: 3, max: 30 }).trim(),
    (0, express_validator_1.body)('password').isLength({ min: 6 }),
    (0, express_validator_1.body)('firstName').optional().isLength({ min: 1, max: 50 }).trim(),
    (0, express_validator_1.body)('lastName').optional().isLength({ min: 1, max: 50 }).trim(),
];
const loginValidation = [
    (0, express_validator_1.body)('email').isEmail().normalizeEmail(),
    (0, express_validator_1.body)('password').isLength({ min: 1 }),
];
router.post('/register', registerValidation, validation_1.validateRequest, authController_1.register);
router.post('/login', loginValidation, validation_1.validateRequest, authController_1.login);
router.get('/profile', auth_1.authenticateToken, authController_1.getProfile);
router.put('/profile', auth_1.authenticateToken, authController_1.updateProfile);
exports.default = router;
//# sourceMappingURL=auth.js.map