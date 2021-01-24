import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorsResolver } from './authors/authors.resolver';
import { AuthorsService } from './authors/services/authors.service';
import { PostsResolver } from './authors/posts.resover';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
  ],
  controllers: [AppController],
  providers: [AppService, AuthorsResolver, PostsResolver, AuthorsService],
})
export class AppModule {}
