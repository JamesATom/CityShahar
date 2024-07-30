// getById-listing.output.ts
import { Field, ObjectType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

@ObjectType()
export class UserBasicInfoListingDTO {
  @Field(() => Boolean, { nullable: true })
  userLiked: boolean;
}

@ObjectType()
export class RoleListingDTO {
  @Field()
  id: number;

  @Field()
  key: string;

  @Field(() => GraphQLJSON)
  name: any;
}

@ObjectType()
export class PropertyOwnerListingDTO {
  @Field()
  id: number;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field({ nullable: true })
  avatarUrl?: string;

  @Field(() => GraphQLJSON, { nullable: true })
  avatarSet?: any;

  @Field(() => RoleListingDTO)
  role: RoleListingDTO;
}

@ObjectType()
export class AddressListingDTO {
  @Field(() => GraphQLJSON)
  area: any;

  @Field(() => GraphQLJSON)
  house: any;

  @Field(() => GraphQLJSON)
  fullAddress: any;

  @Field(() => GraphQLJSON, { nullable: true })
  geoLocation?: any;

  @Field(() => GraphQLJSON, { nullable: true })
  metros?: any;

  @Field()
  addressRouteKey?: string;

  @Field()
  addressTypeKey?: string;
}

@ObjectType()
export class ImageSetListingDto {
  @Field(() => GraphQLJSON)
  images: any;
}

@ObjectType()
export class GeneralAttributesListingDTO {
  @Field(() => GraphQLJSON)
  attributes: any;
}

@ObjectType()
export class SimilarListingDTO {
  @Field()
  id: number;

  @Field(() => GraphQLJSON)
  price: any;

  @Field(() => AddressListingDTO)
  address: AddressListingDTO;

  @Field(() => String, { nullable: true })
  image: string | null;

  @Field(() => Boolean)
  isCommissioned: boolean;
}

@ObjectType()
export class GetByIdListingOutputDTO {
  @Field(() => UserBasicInfoListingDTO, { nullable: true })
  userBasicInfo: UserBasicInfoListingDTO;

  @Field()
  id: number;

  @Field(() => GraphQLJSON)
  viewName: any;

  @Field()
  statusKey: string;

  @Field()
  routeKey: string;

  @Field(() => GraphQLJSON, { nullable: true })
  priceByUnit?: any;

  @Field()
  unit: string;

  @Field()
  currency: string;

  @Field(() => GraphQLJSON)
  description: any;

  @Field()
  phone: string;

  @Field()
  isCommissioned: boolean;

  @Field(() => ImageSetListingDto)
  imageSet: ImageSetListingDto;

  @Field(() => GraphQLJSON)
  price: any;

  @Field(() => PropertyOwnerListingDTO)
  propertyOwner: PropertyOwnerListingDTO;

  @Field(() => AddressListingDTO)
  address: AddressListingDTO;

  @Field(() => GeneralAttributesListingDTO)
  generalAttributes: GeneralAttributesListingDTO;

  @Field(() => [SimilarListingDTO])
  similarListings: SimilarListingDTO[];
}
