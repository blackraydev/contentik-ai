import styled from 'styled-components';

export const Wrapper = styled.div<{ $isMobile: boolean }>`
  display: flex;
  flex-direction: ${({ $isMobile }) => ($isMobile ? 'column' : 'row')};
  height: 100%;
  width: 100%;
  gap: 20px;
  overflow-y: ${({ $isMobile }) => ($isMobile ? 'scroll' : 'none')};
  padding-bottom: 25px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
