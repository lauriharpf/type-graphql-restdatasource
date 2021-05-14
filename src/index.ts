import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { TodoResolver } from "./todos/TodoResolver";
import { TodoDataSource } from "./todos/TodoDataSource";

const PORT = process.env.PORT || 4000;

async function bootstrap() {
  // Create an executable schema: https://typegraphql.com/docs/bootstrap.html#create-executable-schema
  const schema = await buildSchema({
    resolvers: [TodoResolver],
  });

  // Create an HTTP GraphQL endpoint: https://typegraphql.com/docs/bootstrap.html#create-an-http-graphql-endpoint
  const server = new ApolloServer({
    schema,
    playground: true,
    // Add DataSources to the app. Needs to be a function, see https://www.apollographql.com/docs/apollo-server/data/data-sources/#adding-data-sources-to-apollo-server
    dataSources: () => ({
      todoDataSource: new TodoDataSource(),
    }),
  });

  const { url } = await server.listen(PORT);
  console.log(`Server is running, GraphQL Playground available at ${url}`);
}

bootstrap();
