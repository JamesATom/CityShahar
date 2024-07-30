// redis.service.ts
import { Injectable, Inject, OnModuleDestroy } from '@nestjs/common';
import * as Redis from 'ioredis';

@Injectable()
export class RedisService implements OnModuleDestroy {
    constructor(@Inject('REDIS') private readonly client: Redis.Redis) {}

    onModuleDestroy(): void {
        this.client.disconnect();
    }
    
    async setTimestamp(key: string, timestamp: number): Promise<void> {
        this.client.set(key, timestamp.toString(), 'EX', 60); 
    }

    async getTimestamp(key: string): Promise<number | null> {
        const timestamp = await this.client.get(key);
        return timestamp ? parseInt(timestamp) : null;
    }

    async storeVerificationCode(phoneNumber: string, verificationCode: string): Promise<void> {
        this.client.set(phoneNumber, verificationCode, 'EX', 600);
    }

    async getVerificationCode(phoneNumber: string): Promise<string | null> {
        return this.client.get(phoneNumber);
    }

    async deleteVerificationCode(phoneNumber: string): Promise<void> {
        this.client.del(phoneNumber);
    }

    async setNumOfMessages(key: string, num: string): Promise<void> {
        this.client.set(key, num);
    }

    async getNumOfMessages(key: string): Promise<string | null> {
        return this.client.get(key);
    }
}