import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { LoginUserInput } from './dto/login-user.input';
import { User } from '../users/entities/user.entity';
import { AuthPayload } from './dto/auth-payload.dto';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserInput } from './dto/create-user.input';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

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

  validateUser({ email, password }: LoginUserInput): User {
    const user = this.userService.findOneByEmail(email);
    if (!user || user.password !== password) throw new UnauthorizedException();

    const { password: userPass, ...result } = user;
    return result;
  }

  signUp(createUserInput: CreateUserInput): AuthPayload {
    if (this.userService.findOneByEmail(createUserInput.email)) {
      throw new HttpException(
        {
          message: 'Input data validation failed',
          errors: 'Email most be unique',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    const newUser = this.userService.create(createUserInput);

    return {
      user: newUser,
      token: this.jwtService.sign({
        email: newUser.email,
        sub: newUser.id,
      }),
    };
  }
}
