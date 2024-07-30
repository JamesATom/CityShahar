// auth.module.ts
import { Module } from '@nestjs/common';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { RedisModule } from '../redis/redis.module';
import { PlayMobileModule } from '../play mobile/playMobile.module'; 
import { JwtAuthModule } from '../jwt/jwt-auth.module';

@Module({
    imports: [
        RedisModule,
        PlayMobileModule,
        JwtAuthModule,
    ],
    providers: [
        AuthResolver,
        AuthService,
    ],
    exports: []
})
export class AuthModule {}