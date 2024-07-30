// prisma.service.ts
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '../../../../prisma/listingDB-client';

@Injectable()
export class PrismaListingDBService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    // constructor() {
    //     super({
    //         log: ['query', 'info', 'warn', 'error'],
    //     });
    // }
    async onModuleInit() {
        await this.$connect();
    }

    async onModuleDestroy() {
        await this.$disconnect();
    }
}