// getAllSavedCollections-user.output.ts
import { ObjectType, Field, Int } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

@ObjectType()
export class UserAddressDTO {
    @Field(() => String)
    area: string;

    @Field(() => String)
    house: string;

    @Field(() => String)
    fullAddress: string;
}

@ObjectType()
export class UserSavedCollectionsDTO {
    @Field(() => Int)
    id: number;

    @Field(() => GraphQLJSON)
    price: any; 

    @Field(() => String)
    routeKey: string;

    @Field(() => UserAddressDTO)
    address: UserAddressDTO;

    @Field(() => String, { nullable: true })
    image: string | null;

    @Field(() => Boolean, { defaultValue: false })
    isCommissioned: boolean;
}

@ObjectType()
export class PaginatedUserSavedCollectionsDTO {
    @Field(() => [UserSavedCollectionsDTO])
    listings: UserSavedCollectionsDTO[];

    @Field(() => Boolean)
    hasMore: boolean;
}