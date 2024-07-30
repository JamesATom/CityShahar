// getAll-listing.output.ts
import { ObjectType, Field, Int } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

@ObjectType()
export class ListingAddressDTO {
    @Field(() => String)
    area: string;

    @Field(() => String)
    house: string;

    @Field(() => String)
    fullAddress: string;
}

@ObjectType()
export class ListingDetailsDTO {
    @Field(() => Int)
    id: number;

    @Field(() => GraphQLJSON)
    price: any; 

    @Field(() => ListingAddressDTO)
    address: ListingAddressDTO;

    @Field(() => String, { nullable: true })
    image: string | null;

    @Field(() => Boolean, { defaultValue: false })
    isCommissioned: boolean;
}

@ObjectType()
export class PaginatedListingsDTO {
    @Field(() => [ListingDetailsDTO])
    listings: ListingDetailsDTO[];

    @Field(() => Boolean)
    hasMore: boolean;
}