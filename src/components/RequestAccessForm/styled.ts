import styled from 'styled-components';

export const Title = styled.h1`
  transition: 0.2s ease;
  color: ${({ theme }) => theme.colors.primaryFont};
  margin-bottom: 15px;
  text-align: center;
`;

export const Label = styled.p`
  transition: 0.2s ease;
  color: ${({ theme }) => theme.colors.secondaryFont};
  margin-bottom: 25px;
  line-height: 0.55cm;
  text-align: center;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 10px;
`;

export const RequestAccessFormStyled = styled.div<{ $isMobile: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${({ $isMobile }) => ($isMobile ? '100%' : '600px')};
  max-width: 400px;
  height: 100%;
  color: ${({ theme }) => theme.colors.primaryFont};

  ${Title} {
    font-size: ${({ $isMobile }) => ($isMobile ? '30px' : '32px')};
  }
  ${Label} {
    font-size: ${({ $isMobile }) => ($isMobile ? '14px' : '16px')};
  }
`;
