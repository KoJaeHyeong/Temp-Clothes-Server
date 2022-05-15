import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { FileUpload, GraphQLUpload } from 'graphql-upload';
import { FeedImg } from './entities/feedImg.entity';
import { FeedImgService } from './feedImg.service';

@Resolver()
export class FeedImgResolver {
  constructor(private readonly feedImgService: FeedImgService) {}
  @Mutation(() => [String])
  uploadImg(
    @Args({ name: 'imgs', type: () => [GraphQLUpload] })
    imgs: FileUpload[],
  ) {
    return this.feedImgService.upload({ imgs });
  }

  @Mutation(() => [FeedImg])
  createFeedImgs(
    @Args('feedId')
    feedId: string,
    @Args({ name: 'imgURLs', type: () => [String] })
    imgURLs: string[],
  ) {
    return this.feedImgService.create({ feedId, imgURLs });
  }

  @Mutation(() => [String])
  updateFeedImgs(
    @Args('feedId')
    feedId: string,
    @Args({ name: 'imgURLs', type: () => [String] })
    imgURLs: string[],
  ) {
    return this.feedImgService.updateImg({
      feedId,
      imgURLs,
    });
  }

  @Mutation(() => Boolean)
  deleteFeedImgs(
    @Args('feedImgId')
    feedImgId: string,
  ) {
    return this.feedImgService.delete({ feedImgId });
  }
}
