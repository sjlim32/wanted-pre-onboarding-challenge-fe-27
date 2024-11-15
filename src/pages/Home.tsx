import styled from 'styled-components';

import HomeEnter from '@/features/auth/ui/HomeEnter';

export default function HomePage() {
  return (
    <HomeWrapper>
      <h1>투두 리스트</h1>
      <HomeEnter />
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
