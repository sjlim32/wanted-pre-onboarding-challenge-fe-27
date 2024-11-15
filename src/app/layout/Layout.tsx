import { Outlet } from 'react-router-dom';

import { MainLayout, RootLayout } from '@/shared/style';
import Header from '@/widgets/header/ui/Header';

export default function Layout() {
  return (
    <RootLayout>
      <Header />
      <MainLayout>
        <Outlet />
      </MainLayout>
    </RootLayout>
  );
}
