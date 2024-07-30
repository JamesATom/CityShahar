// playMobile.module.ts
import { Module } from '@nestjs/common';
import { RedisModule } from '../redis/redis.module';
import { PlayMobileService } from './playMobile.service';

@Module({
    imports: [
        RedisModule
    ],
    providers: [PlayMobileService],
    exports: [PlayMobileService]
})
export class PlayMobileModule {}