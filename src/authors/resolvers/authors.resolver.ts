import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Author } from '../models/author.model';
import { Post } from '../models/post.model';
import { AuthorsService } from '../services/authors.service';
import { PostsService } from '../services/posts.service';

@Resolver((of) => Author)
export class AuthorsResolver {
  constructor(
    private authorsService: AuthorsService,
    private postsService: PostsService,
  ) {}

  @Query((returns) => Author, { name: 'author', nullable: true })
  async getAuthor(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Author> {
    return this.authorsService.findOneById(id);
  }

  @Query((returns) => [Author], { name: 'authors', nullable: true })
  async getAuthors(): Promise<Author[]> {
    return this.authorsService.findAll();
  }

  @ResolveField('posts', (returns) => [Post], { nullable: true })
  async getPosts(@Parent() author: Author): Promise<Post[]> {
    return this.postsService.findByAuthorId(author.id);
  }
}
