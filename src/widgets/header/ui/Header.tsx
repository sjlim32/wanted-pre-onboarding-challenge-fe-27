import styled from 'styled-components';

export default function Header() {
  // TODO : refactor to global state
  const user = localStorage.getItem('user');

  return <HeaderWrapper>{user && <ProfileBox>{user}님 어서오세요 !</ProfileBox>}</HeaderWrapper>;
}

const HeaderWrapper = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
