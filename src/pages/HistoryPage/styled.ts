import styled from 'styled-components';
import { Loader } from '../../UI';

export const Wrapper = styled.div<{ $isMobile: boolean }>`
  display: flex;
  flex-direction: ${({ $isMobile }) => ($isMobile ? 'column' : 'row')};
  height: 100%;
  width: 100%;
  gap: 20px;
  overflow-y: ${({ $isMobile }) => ($isMobile ? 'scroll' : 'none')};

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const LoaderStyled = styled(Loader)`
  width: 50px;
  height: 50px;

  circle {
    stroke: ${({ theme }) => theme.colors.icon};
  }
`;
