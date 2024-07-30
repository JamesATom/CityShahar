import { InputType, Field } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

@InputType()
export class CreateListingInput {
    @Field()
    id: number;

    @Field(() => GraphQLJSON)
    viewName: any;

    @Field(() => GraphQLJSON)
    boardName: any;

    @Field(() => GraphQLJSON)
    category: any;

    @Field()
    statusKey: string;

    @Field()
    routeKey: string;

    @Field(() => GraphQLJSON)
    price: any;

    @Field(() => GraphQLJSON)
    priceByUnit: any;

    @Field()
    unit: string;

    @Field()
    currency: string;

    @Field(() => GraphQLJSON)
    description: any;

    @Field(() => GraphQLJSON)
    address: any;

    @Field()
    phone: string;

    @Field(type => String, { nullable: true })
    videoLink?: string | null;

    @Field()
    viewCount: number;

    @Field()
    isCommissioned: boolean;

    @Field(() => GraphQLJSON)
    user: any;

    @Field(() => [GraphQLJSON])
    imageSets: any[];

    @Field(() => [GraphQLJSON])
    generalAttributes: any[];

    @Field()
    isFavorite: boolean;

    @Field()
    isHidden: boolean;

    @Field()
    createdAt: string;

    @Field()
    updatedAt: string;

    @Field(type => String, { nullable: true })
    publishedAt?: string | null;
}
