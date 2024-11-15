import useNavigator from '@/shared/lib/hooks/useNavigator';
import Button from '@/shared/ui/Button';

export default function HomeEnter() {
  const user = localStorage.getItem('user');

  const navigateToAuth = useNavigator({ path: '/auth' });
  const navigateToTodo = useNavigator({ path: '/todo' });

  return (
    <>
      {user ? (
        <Button title="투두 보러가기" onClick={navigateToTodo} size={2} />
      ) : (
        <Button title="로그인 하러가기" onClick={navigateToAuth} size={2} />
      )}
    </>
  );
}
