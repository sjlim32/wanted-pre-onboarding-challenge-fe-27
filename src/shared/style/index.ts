import styled from 'styled-components';

export const RootLayout = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100vh;
  padding: 5rem;
  box-sizing: border-box;
`;

export const MainLayout = styled.div`
  flex: 1;
  display: flex;

  width: 100%;
  height: 100%;
  overflow: auto;
`;

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`;
