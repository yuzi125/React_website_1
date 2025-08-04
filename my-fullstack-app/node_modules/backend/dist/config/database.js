"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.disconnectDatabase = exports.connectDatabase = void 0;
const client_1 = require("@prisma/client");
const logger_1 = __importDefault(require("./logger"));
let prisma;
if (process.env.NODE_ENV === 'production') {
    prisma = new client_1.PrismaClient();
}
else {
    if (!global.__prisma) {
        global.__prisma = new client_1.PrismaClient({
            log: ['query', 'error', 'warn'],
        });
    }
    prisma = global.__prisma;
}
const connectDatabase = async () => {
    try {
        await prisma.$connect();
        logger_1.default.info('✅ Connected to PostgreSQL database');
    }
    catch (error) {
        logger_1.default.error('❌ Failed to connect to database:', error);
        process.exit(1);
    }
};
exports.connectDatabase = connectDatabase;
const disconnectDatabase = async () => {
    try {
        await prisma.$disconnect();
        logger_1.default.info('🔌 Disconnected from PostgreSQL database');
    }
    catch (error) {
        logger_1.default.error('❌ Error disconnecting from database:', error);
    }
};
exports.disconnectDatabase = disconnectDatabase;
exports.default = prisma;
//# sourceMappingURL=database.js.map