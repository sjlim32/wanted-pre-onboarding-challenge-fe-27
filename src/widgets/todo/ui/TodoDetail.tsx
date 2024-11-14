import { useLocation } from 'react-router-dom';

import { Todo, TodoArray } from '@/entities/todo/todo.model';

export default function TodoDetail() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');

  const todo = TODO_MOCK_LIST.find((todo: Todo) => todo.id === id);

  if (!todo) {
    return <p>Todo를 선택해주세요</p>;
  }

  return (
    <>
      <header>
        <h1>TodoDetail</h1>
        <button>Delete Todo</button>
        <button>Edit Todo</button>
      </header>
      <section>
        <div>
          <span>{todo.title}</span>
          <span>{todo.content}</span>
        </div>
      </section>
    </>
  );
}

const TODO_MOCK_LIST: TodoArray = [
  {
    id: '1',
    title: 'Todo 1',
    content: 'Todo 1 content',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '2',
    title: 'Todo 2',
    content: 'Todo 2 content',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
