import { useState } from 'react';
import styled from 'styled-components';

import { AUTH_TAB } from '@/features/auth/model/auth.const';
import LogIn from '@/features/login/ui/LogIn';
import SignUp from '@/features/signup/ui/SignUp';
import { Wrapper } from '@/shared/style';

export default function AuthPage() {
  const [tab, setTab] = useState<AUTH_TAB>('logIn');

  const toggleTab = (tab: AUTH_TAB) => {
    setTab(tab);
  };

  return (
    <Wrapper>
      <AuthWrapper>
        <TabContainer>
          <Tab $active={tab === 'logIn'} onClick={() => toggleTab('logIn')}>
            로그인
          </Tab>
          <Tab $active={tab === 'signUp'} onClick={() => toggleTab('signUp')}>
            회원가입
          </Tab>
        </TabContainer>
        {tab === 'logIn' ? <LogIn /> : <SignUp onToggle={toggleTab} />}
      </AuthWrapper>
    </Wrapper>
  );
}

const AuthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 30rem;

  border-radius: 0.5rem;
  box-shadow: 0px 15px 25px #cd8e7d90;
`;

const TabContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: -2px -2px 0 -2px;
  width: calc(100% + 4px);
`;

const Tab = styled.h3<{ $active: boolean }>`
  flex: 1;

  margin: 0;
  padding: 1rem;

  text-align: center;
  cursor: pointer;

  color: ${({ $active }) => ($active ? '#000' : '#666')};
  border: 2px solid ${({ $active }) => ($active ? '#CD8E7D99' : 'transparent')};
  border-bottom: 2px solid ${({ $active }) => ($active ? 'transparent' : '#CD8E7D99')};
  border-radius: 0.5rem 0.5rem 0 0;

  transition: all 0.3s ease;
  &:hover {
    color: #eebfb3;
  }
`;
