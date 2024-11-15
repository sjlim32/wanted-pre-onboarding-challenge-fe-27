import { Link, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { authNavigation, defaultNavigation } from '@/features/auth/model/navigation.model';

export default function Navigation() {
  const location = useLocation();

  const user = localStorage.getItem('user');
  const navTab = user ? authNavigation : defaultNavigation;

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    alert('로그아웃 되었습니다.');
  };

  return (
    <Nav>
      {navTab.map((tab) =>
        tab.title === '로그아웃' ? (
          <StyledLink to={tab.path} onClick={handleLogout} isActive={false}>
            {tab.title}
          </StyledLink>
        ) : (
          <StyledLink key={tab.path} to={tab.path} isActive={location.pathname === tab.path}>
            {tab.title}
          </StyledLink>
        )
      )}
    </Nav>
  );
}

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
