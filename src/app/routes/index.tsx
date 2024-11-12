import { createBrowserRouter } from 'react-router-dom';

import AuthPage from '@/pages/Auth';
import HomePage from '@/pages/Home';
import TodoPage from '@/pages/Todo';

export const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'todo',
        element: <TodoPage />,
      },
      {
        path: 'auth',
        element: <AuthPage />,
      },
    ],
  },
]);
