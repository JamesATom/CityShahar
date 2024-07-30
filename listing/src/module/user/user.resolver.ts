// user.resolver.ts
import { Resolver, Query, Args, Context } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../../common/guards/auth.guard';
import { UsersService } from './user.service';
import { GetAllSavedCollectionsUserInput } from './dto/getAllSavedCollections-user.input';
import { PaginatedUserSavedCollectionsDTO } from './entity/getAllSavedCollections-user.output';

@UseGuards(AuthGuard)
@Resolver()
export class UsersResolver {
    constructor(
        private readonly userService: UsersService
    ) {}

    @Query(() => PaginatedUserSavedCollectionsDTO)
    getAllSavedCollections(
        @Args('data') data: GetAllSavedCollectionsUserInput,
        @Args('lang', { type: () => String, defaultValue: 'uz', nullable: true }) lang: string
    ): Promise<PaginatedUserSavedCollectionsDTO> {
        return this.userService.getAllSavedCollections(data, lang);
    }
}