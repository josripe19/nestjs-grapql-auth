import { Post } from '../models/post.model';
import { POSTS } from '../models/posts.data';

export class PostsService {
  findByAuthorId(authorId: number): Post[] {
    return POSTS.filter((post) => post.authorId === authorId);
  }

  findAll(): Post[] {
    return POSTS;
  }

  findById(id: number): Post {
    return POSTS.find((post) => post.id === id);
  }
}
