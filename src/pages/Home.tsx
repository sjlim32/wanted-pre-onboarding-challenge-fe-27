import styled from 'styled-components';

import useNavigator from '@/shared/lib/hooks/useNavigator';
import Button from '@/shared/ui/Button';

export default function HomePage() {
  const navigateToAuth = useNavigator({ path: '/auth' });

  return (
    <HomeWrapper>
      <h1>투두 리스트</h1>
      <Button title="로그인" onClick={navigateToAuth} size={2} />
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 85vh;
`;
