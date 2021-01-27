import { Author } from '../models/author.model';
import { AUTHORS } from '../models/authors.data';

export class AuthorsService {
  findOneById(id: number): Author {
    return AUTHORS.filter((author) => author.id === id)[0];
  }

  findAll(): Author[] {
    return AUTHORS;
  }
}
