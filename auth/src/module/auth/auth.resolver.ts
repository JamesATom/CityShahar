// auth.resolver.ts
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { SendVerificationCode } from '../../common/dto/sendVerificationCode-auth.input';
import { VerifyCodeInput } from '../../common/dto/verifyCode-auth.input';
import { VerifyCodeOutput } from '../../common/entity/verifyCode-auth.output';

@Resolver()
export class AuthResolver {
    constructor(private authService: AuthService) {}

    @Mutation(() => Boolean)
    async sendVerificationCode(@Args('data') data: SendVerificationCode): Promise<boolean> {
        return this.authService.sendVerificationCode(data);
    }

    @Mutation(() => VerifyCodeOutput)
    async verifyCode(@Args('data') data: VerifyCodeInput): Promise<VerifyCodeOutput> {
        return this.authService.verifyCode(data);
    }
}