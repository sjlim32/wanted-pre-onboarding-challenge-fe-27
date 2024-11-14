import useNavigator from '@/shared/lib/hooks/useNavigator';
import { Wrapper } from '@/shared/styles';
import Button from '@/shared/ui/Button';

export default function HomePage() {
  const navigateToAuth = useNavigator({ path: '/auth' });

  return (
    <Wrapper>
      <h1>투두 리스트</h1>
      <Button title="로그인" onClick={navigateToAuth} size={2} />
    </Wrapper>
  );
}
