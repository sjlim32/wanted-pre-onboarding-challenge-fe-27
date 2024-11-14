import { Outlet } from 'react-router-dom';

import Header from '@/pages/ui/Header';

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
