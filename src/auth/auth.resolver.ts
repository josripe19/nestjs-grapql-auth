import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthPayload } from './dto/auth-payload.dto';
import { CreateUserInput } from './dto/create-user.input';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';
import { LoginUserInput } from './dto/login-user.input';

@Resolver()
export class AuthResolver {
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
  ) {}

  @Mutation(() => AuthPayload)
  signUp(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): AuthPayload {
    return this.authService.signUp(createUserInput);
  }

  @Mutation(() => AuthPayload)
  login(@Args('loginUserInput') loginUserInput: LoginUserInput): AuthPayload {
    return this.authService.login(loginUserInput);
  }
}
