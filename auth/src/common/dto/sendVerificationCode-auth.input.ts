// sendVerificationCode-auth.input.ts
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class SendVerificationCode {
    @Field()
    phoneNumber: string;
}
