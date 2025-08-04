"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const compression_1 = __importDefault(require("compression"));
const morgan_1 = __importDefault(require("morgan"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const dotenv_1 = __importDefault(require("dotenv"));
const errorHandler_1 = require("@/middleware/errorHandler");
const notFound_1 = require("@/middleware/notFound");
const logger_1 = __importDefault(require("@/config/logger"));
const database_1 = require("@/config/database");
const auth_1 = __importDefault(require("@/routes/auth"));
const users_1 = __importDefault(require("@/routes/users"));
const posts_1 = __importDefault(require("@/routes/posts"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
(0, database_1.connectDatabase)();
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
const limiter = (0, express_rate_limit_1.default)({
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000'),
    max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100'),
    message: {
        error: 'Too many requests from this IP, please try again later.'
    },
    standardHeaders: true,
    legacyHeaders: false,
});
app.use(limiter);
app.use(express_1.default.json({ limit: '10mb' }));
app.use(express_1.default.urlencoded({ extended: true, limit: '10mb' }));
app.use((0, compression_1.default)());
if (process.env.NODE_ENV !== 'test') {
    app.use((0, morgan_1.default)('combined', {
        stream: {
            write: (message) => logger_1.default.info(message.trim())
        }
    }));
}
app.get('/health', (_, res) => {
    res.status(200).json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV,
        version: process.env.npm_package_version || '1.0.0'
    });
});
app.use('/api/auth', auth_1.default);
app.use('/api/users', users_1.default);
app.use('/api/posts', posts_1.default);
app.get('/api', (_, res) => {
    res.json({
        message: 'Welcome to the Modern Fullstack API',
        version: '1.0.0',
        documentation: '/api/docs',
        endpoints: {
            auth: '/api/auth',
            users: '/api/users',
            posts: '/api/posts'
        }
    });
});
app.use(notFound_1.notFound);
app.use(errorHandler_1.errorHandler);
if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
        logger_1.default.info(`🚀 Server is running at http://localhost:${PORT}`);
        logger_1.default.info(`📚 Environment: ${process.env.NODE_ENV}`);
        logger_1.default.info(`🗄️  Database: PostgreSQL`);
    });
}
exports.default = app;
//# sourceMappingURL=app.js.map