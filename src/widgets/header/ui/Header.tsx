import { Link, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { navigation } from '@/widgets/header/model/navigation';

export default function Header() {
  const user = '홍길동';
  const location = useLocation();

  return (
    <HeaderWrapper>
      <Nav>
        {navigation.map((item) => (
          <StyledLink key={item.path} to={item.path} isActive={location.pathname === item.path}>
            {item.title}
          </StyledLink>
        ))}
      </Nav>
      {user}님 어서오세요 !
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

const StyledLink = styled(Link).withConfig({
  shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive: boolean }>`
  color: ${({ isActive }) => (isActive ? '#646cff' : '#000')};
  text-decoration: none;

  ${({ isActive }) =>
    isActive &&
    css`
      border-bottom: 2px solid #646cff;
    `}

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;
