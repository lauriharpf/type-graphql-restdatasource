import { RESTDataSource } from "apollo-datasource-rest";
import { Todo } from "./Todo";

export class TodoDataSource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://jsonplaceholder.typicode.com/todos";
  }

  async getTodos(): Promise<Todo[]> {
    return this.get("/");
  }
}
