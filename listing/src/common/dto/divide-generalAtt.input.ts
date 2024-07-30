// divide-generalAtt.input.ts
import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class DivideNameDto {
    @Field()
    ru: string;

    @Field()
    uz: string;

    @Field()
    en: string;
}

@ObjectType()
export class DivideValueDto {
    @Field()
    ru: string;

    @Field()
    uz: string;

    @Field()
    en: string;
}

@ObjectType()
export class DivideGroupNameDto {
    @Field()
    ru: string;

    @Field()
    uz: string;

    @Field()
    en: string;
}

@ObjectType()
export class DivideGeneralAttributesInputDTO {
    @Field(() => DivideGroupNameDto)
    groupName: DivideGroupNameDto;

    @Field(() => [DivideAttributeDto])
    attributes: DivideAttributeDto[];
}

@ObjectType()
export class DivideAttributeDto {
    @Field(() => Int)
    id: number;

    @Field(() => DivideNameDto)
    name: DivideNameDto;

    @Field()
    unitMeasurement: string;

    @Field(() => DivideValueDto)
    value: DivideValueDto;
}