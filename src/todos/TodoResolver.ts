import { Ctx, Query, Resolver } from "type-graphql";
import { Context } from "../Context";
import { Todo } from "./Todo";

@Resolver(Todo)
export class TodoResolver {
  @Query(() => [Todo])
  async todos(@Ctx() context: Context) {
    // The DataSources we set up in index.ts are accessible via the context in our resolvers by using the @Ctx() decorator.
    const startTime = new Date();
    const todos = await context.dataSources.todoDataSource.getTodos();
    console.log(
      `todos query took ${new Date().getTime() - startTime.getTime()}ms`
    );
    return todos;
  }
}
