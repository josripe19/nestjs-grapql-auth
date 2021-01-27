import { Module } from '@nestjs/common';
import { AuthorsResolver } from './resolvers/authors.resolver';
import { PostsResolver } from './resolvers/posts.resover';
import { AuthorsService } from './services/authors.service';
import { PostsService } from './services/posts.service';

@Module({
  providers: [AuthorsResolver, PostsResolver, AuthorsService, PostsService],
})
export class AuthorsModule {}
