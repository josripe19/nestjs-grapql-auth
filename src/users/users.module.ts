import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './strategies/jwt-strategy';

@Module({
  imports: [
    JwtModule.register({
      secret: jwtConstants.secret,
    }),
  ],
  providers: [UsersResolver, UsersService, JwtStrategy],
})
export class UsersModule {}
