import { Injectable } from '@nestjs/common';
import { CreateUserInput } from '../auth/dto/create-user.input';
import { UpdateUserInput } from '../auth/dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  users: User[] = [
    {
      id: 1,
      age: 20,
      name: 'Jose Rios',
      email: 'jose@uh.cu',
      password: 'jose',
    },
    {
      id: 2,
      age: 21,
      name: 'Pepe Prieto',
      email: 'pepe@uh.cu',
      password: 'pepe',
    },
  ];

  create(createUserInput: CreateUserInput): User {
    const maxId = Math.max(...this.users.map((user) => user.id));
    const newUser: User = { id: maxId + 1, ...createUserInput };
    this.users.push(newUser);
    return newUser;
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User {
    return this.users.find((user) => user.id === id);
  }

  update(id: number, updateUserInput: UpdateUserInput): User {
    const index = this.users.findIndex((user) => user.id === id);
    this.users[index] = { ...this.users[index], ...updateUserInput };
    return this.users[index];
  }

  remove(id: number) {
    const deleted = this.users.find((user) => user.id === id);
    this.users = this.users.filter((user) => user.id !== id);
    return deleted;
  }

  findOneByEmail(email: string): User {
    return this.users.find((user) => user.email === email);
  }
}
