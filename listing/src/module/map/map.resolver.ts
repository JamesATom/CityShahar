// map.resolver.ts
import { Resolver, Query, Args } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { MapService } from './services/map.service';
import { AuthGuard } from '../../common/guards/auth.guard';
import { GetAllMapInput } from './dto/getAll-map.input';
import { GetAllMapOutputDTO } from './entity/getAll-map.output';
import { GetByIdMapInput } from './dto/getById-map.input';
import { GetByIdMapOutputDTO } from './entity/getById-map.output';

@UseGuards(AuthGuard)
@Resolver()
export class MapResolver {
    constructor(private readonly mapService: MapService) {}

    @Query(() => GetAllMapOutputDTO)
    getAllMapData(@Args('data') data: GetAllMapInput): Promise<GetAllMapOutputDTO> {
        return this.mapService.getAllMapData(data);
    }

    @Query(() => GetByIdMapOutputDTO)
    getMapDataById(
        @Args('data') data: GetByIdMapInput,
        @Args('lang', { type: () => String, defaultValue: 'uz', nullable: true }) lang: string
    ): Promise<GetByIdMapOutputDTO> {
        return this.mapService.getMapDataById(data, lang);
    }
}
