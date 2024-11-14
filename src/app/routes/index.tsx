import { createBrowserRouter } from 'react-router-dom';

import Layout from '@/app/layout/Layout';
import AuthPage from '@/pages/Auth';
import HomePage from '@/pages/Home';
import TodoPage from '@/pages/Todo';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: 'auth',
    element: <AuthPage />,
  },
  {
    path: 'todo',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <TodoPage />,
      },
    ],
  },
]);
