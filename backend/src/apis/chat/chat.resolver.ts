import { CACHE_MANAGER, Injectable, Inject, UseGuards } from '@nestjs/common';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { GqlAuthAccessGuard } from 'src/commons/auth/gql-auth-guard';
import { CurrentUser, ICurrentUser } from 'src/commons/auth/gql-user.param';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { ChatService } from './chat.service';

@Resolver()
export class ChatResolver {
  constructor(
    private readonly chatService: ChatService,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>, // @Inject(CACHE_MANAGER) // private readonly cacheManager: Cache,
  ) {}

  // @UseGuards(GqlAuthAccessGuard) // 채팅 로그 불러오기
  // @Query(() => [Chat])
  // async fetchLogs(
  //   @Args('opponentNickname') opponentNickname: string, //
  //   @CurrentUser() currentUser: ICurrentUser,
  // ) {
  //   const user = await this.userRepository.findOne({
  //     where: { nickname: opponentNickname },
  //   });
  //   const host = user.id;
  //   return this.chatService.load({ currentUser, host });
  // }

  @UseGuards(GqlAuthAccessGuard) // 룸번호 만들기(uuid)
  @Mutation(() => String)
  async createRoom(
    @CurrentUser() currentUser: ICurrentUser,
    @Args('guestNickname') guestNickname: string, //
  ){
    return this.chatService.create({ currentUser, guestNickname })
  }
}