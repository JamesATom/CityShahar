// getAllSavedCollections-user.input.ts
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GetAllSavedCollectionsUserInput {
    @Field()
    page: number;
    
    @Field()
    userId: string;
}