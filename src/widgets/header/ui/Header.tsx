import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { navigation } from '@/widgets/header/model/navigation';

const HeaderWrapper = styled.header`
  display: flex;
  width: 100%;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <Nav>
        {navigation.map((item) => (
          <Link to={item.path}>{item.title}</Link>
        ))}
      </Nav>
    </HeaderWrapper>
  );
}
