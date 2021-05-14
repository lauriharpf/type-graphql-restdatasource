import { TodoDataSource } from "./todos/TodoDataSource";

export interface Context {
  dataSources: {
    todoDataSource: TodoDataSource;
  };
}
