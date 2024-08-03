import styled from 'styled-components';

export const ContentStyled = styled.div<{ $isMobile: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ $isMobile }) => ($isMobile ? '100%' : '50%')};
  gap: 20px;
  min-height: 250px;

  button {
    width: 50%;
    margin: 0;
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
  padding: 25px 0;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primaryFont};
`;
