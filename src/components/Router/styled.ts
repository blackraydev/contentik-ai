import styled from 'styled-components';
import { Loader } from '../../UI';

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const AuthLoader = styled(Loader)`
  width: 60px;
  height: 60px;

  circle {
    stroke: ${({ theme }) => theme.colors.icon};
  }
`;
