// verifyCode-auth.output.ts
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class VerifyCodeOutput {
    @Field()
    success: boolean;

    @Field()
    message: string;

    @Field()
    token: string;

    @Field({ nullable: true })
    userId?: string | null;
}