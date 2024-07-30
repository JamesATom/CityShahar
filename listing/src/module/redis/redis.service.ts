// redis.service.ts
import { Injectable, Inject, OnModuleDestroy } from '@nestjs/common';
import * as Redis from 'ioredis';

@Injectable()
export class RedisService implements OnModuleDestroy {
    constructor(@Inject('REDIS') private readonly client: Redis.Redis) {}

    getClient(): Redis.Redis {
        return this.client;
    }

    onModuleDestroy(): void {
        this.client.disconnect();
    }
    
    async setAllListingsRedis(key: string, data: string): Promise<void> {
        this.client.set(key, data, 'EX', 2592000);
    }

    async getAllListingsRedis(key: string): Promise<string | null> {
        return this.client.get(key);
    }

    async setListingByIdRedis(key: string, data: string): Promise<void> {
        this.client.set(key, data, 'EX', 1296000);
    }

    async getListingByIdRedis(key: string): Promise<string | null> {
        return this.client.get(key);
    }

    async setListingByIdDBQueryRedis(key: string, data: string): Promise<void> {
        this.client.set(key, data, 'EX', 1296000);
    }

    async getListingByIdDBQueryRedis(key: string): Promise<string | null> {
        return this.client.get(key);
    }

    async setAllMapDataRedis(key: string, data: string): Promise<void> {
        this.client.set(key, data, 'EX', 2592000);
    }

    async getAllMapDataRedis(key: string): Promise<string | null> {
        return this.client.get(key);
    }

    async setMapDataByIdRedis(key: string, data: string): Promise<void> {
        this.client.set(key, data, 'EX', 1296000);
    }

    async getMapDataByIdRedis(key: string): Promise<string | null> {
        return this.client.get(key);
    }
}