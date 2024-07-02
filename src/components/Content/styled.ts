import styled from 'styled-components';

export const ContentStyled = styled.div<{ $isMobile: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: ${({ $isMobile }) => ($isMobile ? '100%' : '50%')};
  gap: 20px;

  button {
    width: 50%;
  }
`;

export const FullWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Text = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primaryFont};
`;
