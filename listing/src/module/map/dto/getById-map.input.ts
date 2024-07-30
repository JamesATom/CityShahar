// getById-listing.input.ts
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GetByIdMapInput {
    @Field()
    id: number;

    @Field()
    userId: string;
}