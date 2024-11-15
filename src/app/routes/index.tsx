import { createBrowserRouter } from 'react-router-dom';

import Layout from '@/app/layout/Layout';
import { requireAuth } from '@/features/auth/utils/requireAuth';
import AuthPage from '@/pages/Auth';
import HomePage from '@/pages/Home';
import TodoPage from '@/pages/Todo';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'todo',
        element: <TodoPage />,
        loader: requireAuth,
      },
      {
        path: 'auth',
        element: <AuthPage />,
      },
    ],
  },
]);
