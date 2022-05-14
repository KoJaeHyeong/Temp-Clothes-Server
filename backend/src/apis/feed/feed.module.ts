import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedImg } from '../feedImg/entities/feedImg.entity';
import { FeedTag } from '../feedTag/entities/feedTag.entity';
import { Region } from '../region/entities/region.entity';
import { User } from '../user/entities/user.entity';
import { Feed } from './entities/feed.entity';
import { FeedResolver } from './feed.resolver';
import { FeedService } from './feed.service';

@Module({
  imports: [
    //
    TypeOrmModule.forFeature([Feed, FeedTag, Region, User, FeedImg]),
  ],
  providers: [FeedResolver, FeedService],
})
export class FeedModule {}
