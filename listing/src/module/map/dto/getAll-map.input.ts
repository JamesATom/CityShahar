// getAll-map.input.ts
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class MapFiltersInput {
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
export class GetAllMapInput {
    @Field()
    type: string;

    @Field()
    regionId: number;

    @Field()
    districtId: number;

    @Field(() => MapFiltersInput, { nullable: true })
    filters?: MapFiltersInput;
}