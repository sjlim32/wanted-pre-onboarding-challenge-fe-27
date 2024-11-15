import { redirect } from 'react-router-dom';

export const requireAuth = async () => {
  const user = localStorage.getItem('user');
  if (!user) {
    alert('로그인이 필요합니다.');
    throw redirect('/auth');
  }
  return null;
};
