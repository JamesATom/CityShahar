// map.service.ts
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { createHash } from 'crypto';
import { PrismaListingDBService } from '../../prisma/listingDB/prisma.service';
import { PrismaUserDBService } from '../../prisma/userDB/prisma.service';
import { RedisService } from '../../redis/redis.service';
import { FilterService } from '../../../common/services/filter.service';
import { MapperService } from './mapper.service';
import { CommonService } from '../../../common/services/common.service';
import { DivideGeneralAttributesInputDTO, DivideAttributeDto } from '../../../common/dto/divide-generalAtt.input';
import { GetAllMapInput } from '../dto/getAll-map.input';
import { GetAllMapOutputDTO } from '../entity/getAll-map.output';
import { GetByIdMapInput } from '../dto/getById-map.input';
import { GetByIdMapOutputDTO } from '../entity/getById-map.output';
import {  
    DEFAULT_GEOLOCATION, 
    DEFAULT_ADDRESS_KEYS, 
    HOUSE_DETAILS_ATTRIBUTES, 
    HOUSE_RULES_ATTRIBUTES, 
    FACILITIES_ATTRIBUTES 
} from '../../../common/constants/listing.constants';

@Injectable()
export class MapService {
    private defaultLang: string = 'uz';
    private defaultType: string = 'sale';
    private defaultRegionId: number = 14;
    private defaultBuildingType: string = 'Apartment';

    constructor(    
        private readonly prismaListingDBService: PrismaListingDBService,
        private readonly prismaUserDBService: PrismaUserDBService,
        private readonly redisService: RedisService,
        private readonly mapperService: MapperService,
        private readonly filterService: FilterService,
        private readonly commonService: CommonService
    ) {}

    async getAllMapData(data: GetAllMapInput): Promise<GetAllMapOutputDTO> {
        let { type, regionId, districtId, filters } = data;
        type = type || this.defaultType;
        regionId = regionId || this.defaultRegionId;

        let { 
            buildingType, floor, rooms, 
            buildingAreaFrom, buildingAreaTo,
            buildingPriceFrom, buildingPriceTo,
            buildingYearFrom, buildingYearTo,
            safety, parking, garbage, serviceLift, 
            passengerLift, balcony, playground, wifi
        } = filters;
        buildingType = buildingType || this.defaultBuildingType;

        // Create a cache key based on the arguments
        const cacheKey = createHash('sha256')
            .update(`map_${type}_${regionId}_${districtId || 'all'}_${buildingType}`)
            .update(`${floor || 0}_${rooms || 0}_${buildingAreaFrom || 0}_${buildingAreaTo || 0}`)
            .update(`${buildingPriceFrom || 0}_${buildingPriceTo || 0}_${buildingYearFrom || 0}_${buildingYearTo || 0}`)
            .update(`${safety || 0}_${parking || 0}_${garbage || 0}_${serviceLift || 0}_${passengerLift || 0}_${balcony || 0}_${playground || 0}_${wifi || 0}`)
            .digest('hex');
        let listings: any = await this.redisService.getAllMapDataRedis(cacheKey);

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
            
            await this.redisService.setAllMapDataRedis(cacheKey, JSON.stringify(listings));
        }
    
        // Map the filtered listings
        const mappedProperties: any = listings.map(listing => this.mapperService.mapListingToProperty(listing));
        
        return { listings: mappedProperties };
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
                        geoLocation: true,
                    }
                },
                category: {
                    select: {
                        name: true,
                    }
                },
                generalAttributes: {
                    select: {
                        attributes: true
                    }
                },
            }
        });
    }

    async getMapDataById(data: GetByIdMapInput, lang: string = 'uz'): Promise<GetByIdMapOutputDTO> {
        lang = lang || this.defaultLang;
        const userIdPart = data.userId ? `_${data.userId}` : '';
        const cachedKey = `map_${data.id}_${lang}${userIdPart}`;
        const cachedListing = await this.redisService.getMapDataByIdRedis(cachedKey);
        
        if (cachedListing) {
            return JSON.parse(cachedListing);
        }

        try {
            const listing = await this.fetchListingById(data.id);
           
            if (!listing) {
                throw new HttpException(`Listing not found with Id: ${data.id}`, HttpStatus.NOT_FOUND);
            }
    
            const { houseDetails, houseRules, facilities } = this.divideGeneralAttributes(listing.generalAttributes.attributes as unknown as DivideGeneralAttributesInputDTO[], lang)
         
            const output = await this.constructListingOutput(listing, houseDetails, houseRules, facilities, lang, data.userId);
    
            await this.redisService.setMapDataByIdRedis(cachedKey, JSON.stringify(output));

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
    
    private async constructListingOutput(listing: any, houseDetails: any, houseRules: any, facilities: any, lang: string, userId: string): Promise<GetByIdMapOutputDTO> {
        const output: GetByIdMapOutputDTO = {
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
