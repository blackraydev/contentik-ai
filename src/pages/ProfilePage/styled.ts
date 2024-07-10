import styled from 'styled-components';

export const Wrapper = styled.div<{ $isMobile: boolean }>`
  display: flex;
  flex-direction: ${({ $isMobile }) => ($isMobile ? 'column' : 'row')};
  justify-content: space-between;
  height: 100%;
  width: 100%;
  overflow-y: ${({ $isMobile }) => ($isMobile ? 'scroll' : 'none')};
  padding-bottom: 25px;
  gap: 20px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Title = styled.h3`
  transition: 0.2s ease;
  width: 100%;
  text-align: start;
  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primaryFont};
  margin-bottom: 10px;
`;
