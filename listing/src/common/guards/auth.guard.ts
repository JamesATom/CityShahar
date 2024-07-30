// auth.guard.ts
import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private readonly jwtService: JwtService) {}

    canActivate(context: ExecutionContext): boolean {
        const ctx = GqlExecutionContext.create(context).getContext();
        
        const headers = ctx.req ? ctx.req.headers : ctx.headers;
        
        if (!headers || !headers.authorization) {
            throw new HttpException('Authorization header not found', HttpStatus.UNAUTHORIZED);
        }
        
        ctx.user = this.validateToken(headers.authorization);
        return true;
    }

    validateToken(auth: string) {
        if (auth.split(' ')[0] !== 'Bearer') {
            throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
        }
        try {
            const token = auth.split(' ')[1];
            return this.jwtService.verify(token);
        } catch (e) {
            if (e.name === 'TokenExpiredError') {
                throw new HttpException('Token expired', HttpStatus.UNAUTHORIZED);
            }
            throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
        }
    }
}