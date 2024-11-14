import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Todo, TodoArray } from '@/entities/todo.model';

export default function TodoDetail() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id'); // 쿼리 문자열에서 id 값 가져오기

  const [todo, setTodo] = useState<Todo | undefined>(undefined);

  useEffect(() => {
    const foundTodo = TODO_MOCK_LIST.find((todo: Todo) => todo.id === id);
    setTodo(foundTodo);
  }, [id]);

  if (!todo) {
    return <p>Todo를 찾을 수 없습니다.</p>;
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
