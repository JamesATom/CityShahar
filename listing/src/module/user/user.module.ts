// user.module.ts
import { Module } from '@nestjs/common';
import { JwtAuthModule } from '../jwt/jwt-auth.module';
import { UsersService } from './user.service';
import { UsersResolver } from './user.resolver';
import { CommonService } from '../../common/services/common.service';
import { MapperService } from '../../common/services/mapper.service';

@Module({
    imports: [JwtAuthModule],
    providers: [
        UsersResolver, 
        UsersService,
        CommonService,
        MapperService
    ],
})
export class UserModule {}
