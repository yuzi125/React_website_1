import { Request, Response, NextFunction } from 'express';
interface JwtPayload {
    userId: string;
    email: string;
    role: string;
}
declare global {
    namespace Express {
        interface Request {
            user?: JwtPayload;
        }
    }
}
export declare const authenticateToken: (req: Request, _: Response, next: NextFunction) => void;
export declare const optionalAuth: (req: Request, _: Response, next: NextFunction) => void;
export declare const requireAdmin: (req: Request, _: Response, next: NextFunction) => void;
export {};
//# sourceMappingURL=auth.d.ts.map