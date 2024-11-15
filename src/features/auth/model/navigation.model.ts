type navigation = {
  path: string;
  title: string;
};

export const defaultNavigation: navigation[] = [
  { path: '/', title: '메인' },
  { path: '/todo', title: '투두-리스트' },
  { path: '/auth', title: '로그인' },
];

export const authNavigation: navigation[] = [
  { path: '/', title: '메인' },
  { path: '/todo', title: '투두-리스트' },
  { path: '/', title: '로그아웃' },
];
