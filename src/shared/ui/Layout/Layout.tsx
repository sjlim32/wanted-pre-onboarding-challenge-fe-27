import { Outlet } from 'react-router-dom';

import Header from '@/shared/ui/Header';

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
