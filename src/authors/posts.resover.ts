import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Author } from './models/author.model';
import { Post } from './models/post.model';
import { AuthorsService } from './services/authors.service';

@Resolver((of) => Post)
export class PostsResolver {
  constructor(private authorsService: AuthorsService) {}

  @Query((returns) => [Post], { name: 'posts', nullable: true })
  async getAllPosts(): Promise<Post[]> {
    return this.authorsService.getAllPosts();
  }

  @Query((returns) => Post, { name: 'post', nullable: true })
  async getPost(@Args('id', { type: () => Int }) id: number): Promise<Post> {
    return this.authorsService.findPostById(id);
  }

  @ResolveField('author', (returns) => Author)
  async getPosts(@Parent() post: Post): Promise<Author> {
    return this.authorsService.findOneById(post.authorId);
  }
}
