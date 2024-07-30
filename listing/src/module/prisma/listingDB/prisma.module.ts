// prisma.module.ts
import { Global, Module } from '@nestjs/common';
import { PrismaListingDBService } from './prisma.service';

@Global()
@Module({
    providers: [PrismaListingDBService],
    exports: [PrismaListingDBService],
})
export class PrismaListingModule {}