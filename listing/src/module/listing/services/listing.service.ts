// listing.service.ts
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { createHash } from 'crypto';
import { PrismaListingDBService } from '../../prisma/listingDB/prisma.service';
import { PrismaUserDBService } from '../../prisma/userDB/prisma.service';
import { RedisService } from '../../redis/redis.service';
import { FilterService } from '../../../common/services/filter.service';
import { SortService } from './sort.service';
import { MapperService } from '../../../common/services/mapper.service';
import { CommonService } from '../../../common/services/common.service';
import { GetAllListingInput } from '../dto/getAll-listing.input';
import { GetByIdListingInput } from '../dto/getById-listing.input';
import { DivideGeneralAttributesInputDTO, DivideAttributeDto } from '../../../common/dto/divide-generalAtt.input';
import { PaginatedListingsDTO } from '../entities/getAll-listing.output';
import { GetByIdListingOutputDTO } from '../entities/getById-listing.output';
import {  
    DEFAULT_GEOLOCATION, 
    DEFAULT_ADDRESS_KEYS, 
    HOUSE_DETAILS_ATTRIBUTES, 
    HOUSE_RULES_ATTRIBUTES, 
    FACILITIES_ATTRIBUTES 
} from '../../../common/constants/listing.constants';

@Injectable()
export class ListingService {
    private pageSize = 20;
    private defaultLang = 'uz';
    private defaultType: string = 'sale';
    private defaultRegionId: number = 14;
    private defaultBuildingType = 'Apartment';

    constructor(
        private readonly prismaListingDBService: PrismaListingDBService,
        private readonly prismaUserDBService: PrismaUserDBService,
        private readonly redisService: RedisService,
        private readonly filterService: FilterService,
        private readonly sortService: SortService,
        private readonly mapperService: MapperService,
        private readonly commonService: CommonService
    ) {}

    async sayHello(): Promise<string> {
        return 'Hello from localhost listing service!';
    }

    async getAllListings(data: GetAllListingInput, lang: string): Promise<PaginatedListingsDTO> {
        let { page, type, regionId, districtId, filters, sort } = data;
        type = type || this.defaultType;
        regionId = regionId || this.defaultRegionId;
        lang = lang || this.defaultLang;

        let { 
            buildingType, floor, rooms, 
            buildingAreaFrom, buildingAreaTo,
            buildingPriceFrom, buildingPriceTo,
            buildingYearFrom, buildingYearTo,
            safety, parking, garbage, serviceLift, 
            passengerLift, balcony, playground, wifi
        } = filters;
        
        buildingType = buildingType || this.defaultBuildingType;
        const { priceHighToLow, priceLowToHigh } = sort;
        
        const cacheKey = createHash('sha256')
            .update(`listings_${type}_${regionId || 'all'}_${districtId || 'all'}_${buildingType}`)
            .update(`${floor || 0}_${rooms || 0}_${buildingAreaFrom || 0}_${buildingAreaTo || 0}`)
            .update(`${buildingPriceFrom || 0}_${buildingPriceTo || 0}_${buildingYearFrom || 0}_${buildingYearTo || 0}`)
            .update(`${safety || 0}_${parking || 0}_${garbage || 0}_${serviceLift || 0}_${passengerLift || 0}_${balcony || 0}_${playground || 0}_${wifi || 0}`)
            .update(`${priceHighToLow || 0}_${priceLowToHigh || 0}_${lang}`)
            .digest('hex');
        let listings: any = await this.redisService.getAllListingsRedis(cacheKey);
        
        if (listings) {
            listings = JSON.parse(listings);
        } else {
            listings = await this.fetchAllListings(type, regionId, districtId);
         
            listings = this.filterService.filterListings(
                listings, buildingType, floor, rooms, 
                buildingAreaFrom, buildingAreaTo, 
                buildingPriceFrom, buildingPriceTo, 
                buildingYearFrom, buildingYearTo,
                safety, parking, garbage, serviceLift,
                passengerLift, balcony, playground, wifi
            );
            listings = this.sortService.sortListings(listings, priceHighToLow, priceLowToHigh);
            await this.redisService.setAllListingsRedis(cacheKey, JSON.stringify(listings));
        }
        
        // Paginate the filtered listings
        const skip = (page - 1) * this.pageSize;
        const paginatedListings = listings.slice(skip, skip + this.pageSize);
        const hasMore = listings.length > skip + this.pageSize;
        const mappedProperties = paginatedListings.map(listing => this.mapperService.mapListingToProperty(listing, lang));
    
        return {
            listings: mappedProperties,
            hasMore,
        };
    }
    
    private async fetchAllListings(type: string, regionId?: number, districtId?: number) {
        const whereCondition = {
            routeKey: type,
            ...(regionId !== 0 || districtId !== 0 ? {
                address: {
                    ...(regionId !== 0 && { regionId }),
                    ...(districtId !== 0 && { districtId })
                }
            } : {})
        };
      
        return this.prismaListingDBService.property.findMany({
            orderBy: { createdAt: 'desc' },
            where: whereCondition,
            select: {
                id: true,
                price: true,
                address: {
                    select: {
                        area: true,
                        house: true,
                        fullAddress: true,
                    }
                },
                category: {
                    select: {
                        name: true,
                    }
                },
                imageSet: true,
                isCommissioned: true,
                generalAttributes: {
                    select: {
                        attributes: true
                    }
                },
            }
        });
    }

    async getListingById(data: GetByIdListingInput, lang: string = 'uz'): Promise<GetByIdListingOutputDTO> {
        lang = lang || this.defaultLang;
        const userIdPart = data.userId ? `_${data.userId}` : '';
        const cachedKey = `listing_${data.id}_${lang}${userIdPart}`;
        const cachedListing = await this.redisService.getListingByIdRedis(cachedKey);
        
        if (cachedListing) {
            return JSON.parse(cachedListing);
        }

        try {
            const listing = await this.fetchListingById(data.id); 
           
            if (!listing) {
                throw new HttpException(`Listing not found with Id: ${data.id}`, HttpStatus.NOT_FOUND);
            }

            const [listings, similarListings] = await Promise.all([
                this.divideGeneralAttributes(listing.generalAttributes.attributes as unknown as DivideGeneralAttributesInputDTO[], lang),
                this.getSimilarListings(listing, lang)
            ]);
         
            const output = await this.constructListingOutput(listing, listings.houseDetails, listings.houseRules, listings.facilities, lang, similarListings, data.userId);
            
            await this.redisService.setListingByIdRedis(cachedKey, JSON.stringify(output));
    
            return output;
        } catch (error) {
            if (error instanceof HttpException && error.getStatus() === HttpStatus.NOT_FOUND) {
                throw error;
            }
            throw new HttpException('Error retrieving listing in findListingById Method!', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    private async fetchListingById(id: number) {
        return this.prismaListingDBService.property.findUnique({
            where: { id },
            select: {
                viewName: true,
                statusKey: true,
                routeKey: true,
                priceByUnit: true,
                unit: true,
                currency: true,
                description: true,
                phone: true,
                isCommissioned: true,
                imageSet: { select: { images: true } },
                id: true,
                price: true,
                propertyOwner: {
                    select: {
                        id: true,
                        firstName: true,
                        lastName: true,
                        avatarUrl: true,
                        avatarSet: true,
                        role: { select: { id: true, key: true, name: true } }
                    }
                },
                address: {},
                generalAttributes: {},
            }
        });
    }
    
    private async getSimilarListings(listing: any, lang: string) {
        const cacheKey = `similarListings_${listing.routeKey}_${lang}`;
        const cachedListings = await this.redisService.getListingByIdDBQueryRedis(cacheKey);
    
        if (cachedListings) {
            const similarListings = JSON.parse(cachedListings);
            return this.getRandomElements(similarListings, 5);
        }
    
        const priceRange = 0.1; 
        const price = Number(listing.price[listing.currency.toLowerCase()]); 
        const minPrice = price * (1 - priceRange);
        const maxPrice = price * (1 + priceRange);
    
        const listings = await this.prismaListingDBService.property.findMany({
            where: {
                routeKey: listing.routeKey, 
                id: {
                    not: listing.id 
                }
            },
            select: {
                id: true,
                price: true,
                currency: true,
                imageSet: { select: { images: true } },
                address: {
                    select: {
                        area: true,
                        house: true,
                        fullAddress: true,
                    }
                },
                isCommissioned: true,
            },
        });
    
        const similarListings = listings.filter(listing => {
            const listingPrice = Number(listing.price[listing.currency.toLowerCase()]);
            return listingPrice >= minPrice && listingPrice <= maxPrice;
        });
    
        await this.redisService.setListingByIdDBQueryRedis(cacheKey, JSON.stringify(similarListings));
        
        return this.getRandomElements(similarListings, 5);
    }
    
    private getRandomElements(array: any[], count: number): any[] {
        const shuffled = array.slice();
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled.slice(0, count);
    }    
    
    private async constructListingOutput(listing: any, houseDetails: any, houseRules: any, facilities: any, lang: string, similarListings: any[], userId: string): Promise<GetByIdListingOutputDTO> {
        const output: GetByIdListingOutputDTO = {
            id: listing.id,
            viewName: this.commonService.getLocalizedValue(listing.viewName, lang),
            statusKey: listing.statusKey,
            routeKey: listing.routeKey,
            priceByUnit: listing.priceByUnit,
            unit: listing.unit,
            currency: listing.currency,
            description: this.commonService.getLocalizedValue(listing.description, lang),
            phone: listing.phone,
            isCommissioned: listing.isCommissioned,
            imageSet: { images: listing.imageSet.images.map((image: any) => image.original) },
            price: listing.price,
            propertyOwner: this.constructPropertyOwner(listing.propertyOwner, lang),
            address: this.constructAddress(listing.address, lang),
            generalAttributes: {
                attributes: {
                    houseDetails: this.commonService.mapAttributes(houseDetails, lang),
                    houseRules: this.commonService.mapAttributes(houseRules, lang),
                    facilities: this.commonService.mapAttributes(facilities, lang),
                },
            },
            similarListings: similarListings.map(similar => this.mapperService.mapListingToProperty(similar, lang)),
            userBasicInfo: { userLiked: false } 
        };
    
        if (userId !== '') {
            const savedListing = await this.prismaUserDBService.savedListings.findFirst({
                where: { userId, listingId: listing.id }
            });
            if (savedListing) {
                output.userBasicInfo.userLiked = true; 
            } else {
                output.userBasicInfo.userLiked = false; 
            }
        } else {
            output.userBasicInfo.userLiked = false;
        }
    
        return output;
    }
    
    private constructPropertyOwner(owner: any, lang: string) {
        return {
            id: owner.id,
            firstName: owner.firstName,
            lastName: owner.lastName,
            avatarUrl: owner.avatarUrl,
            avatarSet: owner.avatarSet,
            role: {
                id: owner.role.id,
                key: owner.role.key,
                name: this.commonService.getLocalizedValue(owner.role.name, lang)
            }
        };
    }
    
    private constructAddress(address: any, lang: string) {
        return {
            area: this.commonService.getLocalizedValue(address?.area, lang),
            house: this.commonService.getLocalizedValue(address?.house, lang),
            fullAddress: this.commonService.getLocalizedValue(address?.fullAddress, lang),
            metros: address?.metros || [],
            geoLocation: address?.geoLocation || DEFAULT_GEOLOCATION,
            addressRouteKey: address?.addressRouteKey || DEFAULT_ADDRESS_KEYS,
            addressTypeKey: address?.addressTypeKey || DEFAULT_ADDRESS_KEYS,
        };
    }
    
    private divideGeneralAttributes(generalAttributes: DivideGeneralAttributesInputDTO[], lang: string): any {
        const houseDetails: DivideAttributeDto[] = [];
        const houseRules: DivideAttributeDto[] = [];
        const facilities: DivideAttributeDto[] = [];
        
        generalAttributes.forEach(group => {
            group.attributes.forEach(attribute => {
                const attrName = attribute.name.en.toLowerCase();
                if (HOUSE_DETAILS_ATTRIBUTES.has(attrName)) {
                    houseDetails.push(attribute);
                } else if (HOUSE_RULES_ATTRIBUTES.has(attrName)) {
                    houseRules.push(attribute);
                } else if (FACILITIES_ATTRIBUTES.has(attrName)) {
                    const items = attribute.value[lang].split(',').map(item => item.trim());
                    items.forEach(item => {
                        facilities.push({
                            id: attribute.id,
                            name: attribute.name,
                            unitMeasurement: attribute.unitMeasurement,
                            value: {
                                ru: item,
                                uz: item,
                                en: item
                            }
                        });
                    });
                }
            });
        });

        return { houseDetails, houseRules, facilities };
    }
}
