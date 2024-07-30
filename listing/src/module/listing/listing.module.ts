// listing.module.ts
import { Module } from '@nestjs/common';
import { RedisModule } from '../redis/redis.module';
import { ListingResolver } from './listing.resolver';
import { ListingController } from './listing.controller';
import { ListingService } from './services/listing.service';
import { EmitControllerService } from './services/emitController.service';
import { SortService } from './services/sort.service';
import { CommonService } from '../../common/services/common.service';
import { FilterService } from '../../common/services/filter.service';
import { MapperService } from '../../common/services/mapper.service';

@Module({
    imports: [
        RedisModule
    ],
    providers: [
        ListingResolver, 
        ListingService, 
        EmitControllerService,
        CommonService,
        SortService,
        FilterService,
        MapperService
    ],
    controllers: [ListingController],
})
export class ListingModule {}
