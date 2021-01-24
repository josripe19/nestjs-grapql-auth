import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorsResolver } from './authors/authors.resolver';
import { AuthorsService } from './authors/services/authors.service';
import { PostsResolver } from './authors/posts.resover';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService, AuthorsResolver, PostsResolver, AuthorsService],
})
export class AppModule {}
