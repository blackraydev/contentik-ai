import styled from 'styled-components';

export const Wrapper = styled.div<{ $isMobile: boolean }>`
  display: flex;
  flex-direction: ${({ $isMobile }) => ($isMobile ? 'column' : 'row')};
  justify-content: space-between;
  align-items: ${({ $isMobile }) => ($isMobile ? 'center' : 'flex-start')};
  height: 100%;
  width: 100%;
  overflow-y: ${({ $isMobile }) => ($isMobile ? 'scroll' : 'none')};
  padding-bottom: ${({ $isMobile }) => ($isMobile ? '80px' : '25px')};
  gap: ${({ $isMobile }) => ($isMobile ? '20px' : '0')};

  &::-webkit-scrollbar {
    display: none;
  }
`;
