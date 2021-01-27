import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { LoginUserInput } from './dto/login-user.input';
import { AuthPayload } from './dto/auth-payload.dto';
import { JwtService } from '@nestjs/jwt';

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

  constructor(private jwtService: JwtService) {}

  create(createUserInput: CreateUserInput): AuthPayload {
    if (this.users.find((user) => user.email === createUserInput.email)) {
      throw new HttpException(
        {
          message: 'Input data validation failed',
          errors: 'Email most be unique',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    const maxId = Math.max(...this.users.map((user) => user.id));
    const newUser: User = { id: maxId + 1, ...createUserInput };
    this.users.push(newUser);

    return {
      user: newUser,
      token: this.jwtService.sign({
        email: newUser.email,
        sub: newUser.id,
      }),
    };
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

  validateUser({ email, password }: LoginUserInput): User {
    const user = this.findOneByEmail(email);
    if (!user || user.password !== password) throw new UnauthorizedException();

    const { password: userPass, ...result } = user;
    return result;
  }

  login(loginUser: LoginUserInput): AuthPayload {
    const validatedUser = this.validateUser(loginUser);

    return {
      user: validatedUser,
      token: this.jwtService.sign({
        email: validatedUser.email,
        sub: validatedUser.id,
      }),
    };
  }
}
