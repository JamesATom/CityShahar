// getById-listing.output.ts
import { Field, ObjectType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

@ObjectType()
export class UserBasicInfoMapDTO {
  @Field()
  userLiked: boolean;
}

@ObjectType()
export class RoleMapDTO {
  @Field()
  id: number;

  @Field()
  key: string;

  @Field(() => GraphQLJSON)
  name: any;
}

@ObjectType()
export class PropertyOwnerDTO {
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

  @Field(() => RoleMapDTO)
  role: RoleMapDTO;
}

@ObjectType()
export class AddressMapDTO {
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
export class ImageSetMapDto {
  @Field(() => GraphQLJSON)
  images: any;
}

@ObjectType()
export class GeneralAttributesMapDTO {
  @Field(() => GraphQLJSON)
  attributes: any;
}

@ObjectType()
export class GetByIdMapOutputDTO {
  @Field(() => UserBasicInfoMapDTO)
  userBasicInfo: UserBasicInfoMapDTO;
  
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

  @Field(() => ImageSetMapDto)
  imageSet: ImageSetMapDto;

  @Field(() => GraphQLJSON)
  price: any;

  @Field(() => PropertyOwnerDTO)
  propertyOwner: PropertyOwnerDTO;

  @Field(() => AddressMapDTO)
  address: AddressMapDTO;

  @Field(() => GeneralAttributesMapDTO)
  generalAttributes: GeneralAttributesMapDTO;
}
