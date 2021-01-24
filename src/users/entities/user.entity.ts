import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int, { description: 'id unique identifier' })
  id: number;

  @Field()
  name: string;

  @Field(() => Int)
  age: number;
}
