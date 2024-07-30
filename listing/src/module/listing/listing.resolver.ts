// listing.resolver.ts
import { Resolver, Query, Args } from '@nestjs/graphql';
import { ListingService } from './services/listing.service';
import { GetAllListingInput } from './dto/getAll-listing.input';
import { GetByIdListingInput } from './dto/getById-listing.input';
import { PaginatedListingsDTO } from './entities/getAll-listing.output';
import { GetByIdListingOutputDTO } from './entities/getById-listing.output';

@Resolver()
export class ListingResolver {
    constructor(private readonly listingService: ListingService) {}

    @Query(() => String)
    sayHello(): Promise<string> {
        return this.listingService.sayHello();
    }

    @Query(() => PaginatedListingsDTO)
    async getAllListings(
        @Args('data') data: GetAllListingInput,
        @Args('lang', { type: () => String, defaultValue: 'uz', nullable: true }) lang: string): Promise<PaginatedListingsDTO> {
        return this.listingService.getAllListings(data, lang);
    }

    @Query(() => GetByIdListingOutputDTO)
    async getListingById(
        @Args('data') data: GetByIdListingInput,
        @Args('lang', { type: () => String, defaultValue: 'uz', nullable: true }) lang: string): Promise<GetByIdListingOutputDTO> {
        return this.listingService.getListingById(data, lang);
    }
}
