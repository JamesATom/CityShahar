// verifyCode-auth.input.ts
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class VerifyCodeInput {
    @Field()
    phoneNumber: string;

    @Field()
    code: string;
}