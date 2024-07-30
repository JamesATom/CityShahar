// prisma.module.ts
import { Global, Module } from '@nestjs/common';
import { PrismaUserDBService } from './prisma.service';

@Global()
@Module({
    providers: [PrismaUserDBService],
    exports: [PrismaUserDBService],
})
export class PrismaUserModule {}