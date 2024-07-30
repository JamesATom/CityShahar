// redis.module.ts
import { Module } from '@nestjs/common';
import { RedisService } from './redis.service';
import { Redis } from 'ioredis';

@Module({
    providers: [
        {
            provide: 'REDIS',
            useFactory: () => {
                const redisInstance = new Redis(process.env.REDIS_URL);

                redisInstance.on('error', e => {
                    throw new Error(`Redis connection failed: ${e} to ${process.env.REDIS_URL}`);
                });

                return redisInstance;
            },
        },
        RedisService,
    ],
    exports: [RedisService],
})
export class RedisModule {}