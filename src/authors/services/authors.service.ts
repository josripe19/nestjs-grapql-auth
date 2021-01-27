import { Author } from '../models/author.model';

export class AuthorsService {
  findOneById(id: number): Author {
    return AUTHORS.filter((author) => author.id === id)[0];
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
