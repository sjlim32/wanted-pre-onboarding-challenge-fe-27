export interface TodoEntity {
  title: string;
  content: string;
}

export interface Todo extends TodoEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}
