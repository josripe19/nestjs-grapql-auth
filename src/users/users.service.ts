import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  users: User[] = [
    { id: 1, age: 20, name: 'Jose Rios' },
    { id: 2, age: 21, name: 'Pepe Prieto' },
  ];

  create(createUserInput: CreateUserInput) {
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

  update(id: number, updateUserInput: UpdateUserInput) {
    const index = this.users.findIndex((user) => user.id === id);
    this.users[index] = { ...this.users[index], ...updateUserInput };
    return updateUserInput;
  }

  remove(id: number) {
    const deleted = this.users.find((user) => user.id === id);
    this.users = this.users.filter((user) => user.id !== id);
    return deleted;
  }
}
