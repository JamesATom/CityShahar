// getAll-listing.input.ts
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ListingsFiltersInput {
    @Field()
    buildingType: string;

    @Field()
    floor: number;
    
    @Field()
    rooms: number;

    @Field()
    buildingAreaFrom: number;

    @Field()
    buildingAreaTo: number;

    @Field()
    buildingPriceFrom: number;

    @Field()
    buildingPriceTo: number;

    @Field()
    buildingYearFrom: number;

    @Field()
    buildingYearTo: number;

    @Field()
    safety: number;

    @Field()
    parking: number;

    @Field()
    garbage: number;

    @Field()
    serviceLift: number;

    @Field()
    passengerLift: number;

    @Field()
    balcony: number;

    @Field()
    playground: number;

    @Field()
    wifi: number;
}

@InputType()
export class SortInput {
    @Field()
    recommended: number;

    @Field()
    priceHighToLow: number;

    @Field()
    priceLowToHigh: number;
}

@InputType()
export class GetAllListingInput {
    @Field()
    page: number;

    @Field()
    type: string;

    @Field()
    regionId: number;

    @Field()
    districtId: number;

    @Field(() => ListingsFiltersInput, { nullable: true })
    filters?: ListingsFiltersInput;

    @Field(() => SortInput, { nullable: true })
    sort?: SortInput;
}