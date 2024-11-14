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

// export default function RootLayout() {
//   return (
//     <div className="flex flex-col w-full min-h-screen ">
//       <Header />
//       <Navigation />
//       <main className="flex p-8 grow ">
//         <Outlet />
//       </main>
//     </div>
//   );
// }
