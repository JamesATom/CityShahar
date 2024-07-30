// map.module.ts
import { Module } from '@nestjs/common';
import { RedisModule } from '../redis/redis.module';
import { JwtAuthModule } from '../jwt/jwt-auth.module';
import { MapResolver } from './map.resolver';
import { MapService } from './services/map.service';
import { MapperService } from './services/mapper.service';
import { FilterService } from '../../common/services/filter.service';
import { CommonService } from '../../common/services/common.service';

@Module({
    imports: [
        RedisModule,
        JwtAuthModule
    ],
    providers: [
        MapResolver, 
        MapService,
        MapperService, 
        FilterService,
        CommonService
    ],
    controllers: [],
})
export class MapModule {}
