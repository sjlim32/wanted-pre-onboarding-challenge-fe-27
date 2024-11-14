import { useSearchParams } from 'react-router-dom';

import { Todo, TodoArray } from '@/entities/todo.model';

export default function TodoList() {
  const [, setSearchParams] = useSearchParams();

  const handleClick = (id: string) => {
    setSearchParams({ id }); // 쿼리 문자열을 업데이트하여 id 값 설정
  };

  return (
    <>
      <header>
        <h1>TodoList</h1>
        <button>Add Todo</button>
      </header>
      <section>
        {TODO_MOCK_LIST.map((todo: Todo) => (
          <div key={todo.id} onClick={() => handleClick(todo.id)}>
            <span>{todo.title} / </span>
            <span>{todo.content}</span>
          </div>
        ))}
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
