# RESTDataSource with TypeGraphQL

Simple example of using [Apollo Server's REST Data Source](https://github.com/apollographql/apollo-server/tree/main/packages/apollo-datasource-rest) with [TypeGraphQL](https://typegraphql.com/).

## Running

1. Ensure [Node.js](https://nodejs.org/) 14 or later is installed.
2. `npm install` in project root directory
3. `npm start` to start the server
4. Access Playground with browser, at `http://localhost:4000/` by default
5. Experiment with RESTDataSource caching by running the following query repeatedly in Playground and checking the server log for execution times.

```
query Todos {
  todos {
    id
    userId
    title
    completed
  }
}
```

6. Kill the server (e.g. with `CTRL-C`) and start it again with `npm start` to reset the cache

## Contributing

If you've found a better way of handling this, please file an issue or open a PR.
