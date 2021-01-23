import { Author } from '../models/author.model';
import { Post } from '../models/post.model';

export class AuthorsService {
  findOneById(id: number): Author {
    return AUTHORS.filter((author) => author.id === id)[0];
  }

  getPosts(id: number): Post[] {
    return POSTS.filter((post) => post.authorId === id);
  }

  findAll(): Author[] {
    return AUTHORS;
  }
}

const AUTHORS: Author[] = [
  {
    id: 1,
    firstName: 'Jose',
    lastName: 'Rios',
    age: 5,
  },
  {
    id: 2,
    firstName: 'Pepe',
    lastName: 'Prieto',
    age: 6,
  },
  {
    id: 3,
    firstName: 'Juan',
    lastName: 'Perez',
    age: 8,
  },
];

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
    title: 'post 5',
    votes: 4,
    authorId: 3,
  },
];
