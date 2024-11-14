import { createBrowserRouter } from 'react-router-dom';

import AuthPage from '@/pages/Auth';
import HomePage from '@/pages/Home';
import TodoPage from '@/pages/Todo';
import Layout from '@/shared/ui/Layout/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
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
