// user.service.ts
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaUserDBService } from '../prisma/userDB/prisma.service';
import { PrismaListingDBService } from '../prisma/listingDB/prisma.service';
import { MapperService } from '../../common/services/mapper.service';
import { GetAllSavedCollectionsUserInput } from './dto/getAllSavedCollections-user.input';
import { PaginatedUserSavedCollectionsDTO } from './entity/getAllSavedCollections-user.output';

@Injectable()
export class UsersService {
    private pageSize: number = 20;
    private defaultLang: string = 'uz';

    constructor(
        private readonly prismaUserDBService: PrismaUserDBService,
        private readonly prismaListingDBService: PrismaListingDBService,
        private readonly mapperService: MapperService,
    ) {}

    async getAllSavedCollections(data: GetAllSavedCollectionsUserInput, lang: string): Promise<PaginatedUserSavedCollectionsDTO> {
        const { userId, page } = data;
        lang = lang || this.defaultLang;
        
        try {
            // Fetch saved listings
            const savedListings = await this.prismaUserDBService.savedListings.findMany({
                where: { userId },
                select: { listingId: true },
            });

            const listingIds = savedListings.map(listing => listing.listingId);

            // Fetch listings based on listingIds
            const listings = await this.prismaListingDBService.property.findMany({
                where: {
                    id: { in: listingIds },
                },
                orderBy: { createdAt: 'desc' },
                select: {
                    id: true,
                    price: true,
                    routeKey: true,
                    address: {
                        select: {
                            area: true,
                            house: true,
                            fullAddress: true,
                        }
                    },
                    imageSet: true,
                    isCommissioned: true,
                }
            });

            // Paginate the results
            const skip = (page - 1) * this.pageSize;
            const paginatedListings = listings.slice(skip, skip + this.pageSize);
            const hasMore = listings.length > skip + this.pageSize;
            const mappedProperties = paginatedListings.map(listing => this.mapperService.mapListingToProperty(listing, lang));

            return {
                listings: mappedProperties,
                hasMore,
            };
        } catch (error) {
            console.error('Error retrieving saved collections:', error);
            throw new HttpException('Failed to retrieve saved collections', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
