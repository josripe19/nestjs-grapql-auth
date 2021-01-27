import { Post } from '../models/post.model';

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

const POSTS: Post[] = [
  {
    id: 1,
    title: 'post 1',
    votes: 5,
    authorId: 1,
  },
  {
    id: 2,
    title: 'post 2',
    votes: 9,
    authorId: 1,
  },
  {
    id: 3,
    title: 'post 3',
    votes: 3,
    authorId: 2,
  },
  {
    id: 4,
    title: 'post 4',
    votes: 5,
    authorId: 2,
  },
  {
    id: 5,
    title: 'post 55',
    votes: 4,
    authorId: 3,
  },
];
