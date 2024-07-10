import styled from 'styled-components';

export const Wrapper = styled.div<{ $isMobile: boolean }>`
  display: flex;
  flex-direction: ${({ $isMobile }) => ($isMobile ? 'column' : 'row')};
  height: 100%;
  width: 100%;
  gap: 20px;
  padding-bottom: 25px;
`;
