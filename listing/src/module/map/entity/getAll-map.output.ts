// getAll-map.output.ts
import { ObjectType, Field, Int } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

@ObjectType()
export class MapListingDetailsDTO {
    @Field(() => Int)
    id: number;

    @Field(() => GraphQLJSON)
    price: any; 

    @Field(() => GraphQLJSON, { nullable: true })
    geoLocation?: any;
}

@ObjectType()
export class GetAllMapOutputDTO {
    @Field(() => [MapListingDetailsDTO])
    listings: MapListingDetailsDTO[];
}