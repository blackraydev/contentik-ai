import styled, { css } from 'styled-components';

export const GenerationListStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: 100%;
`;

export const GenerationHistoryWrapper = styled.div<{ $isMobile: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: ${({ $isMobile }) => ($isMobile ? '100%' : '50%')};
  height: ${({ $isMobile }) => ($isMobile ? 'fit-content' : 'calc(100vh - 100px)')};

  ${GenerationListStyled} {
    padding-bottom: ${({ $isMobile }) => ($isMobile ? '35px' : '30px')};

    ${({ $isMobile }) =>
      !$isMobile &&
      css`
        overflow-y: scroll;

        &::-webkit-scrollbar {
          display: none;
        }
      `}
  }
`;

export const GenerationsEmptyText = styled.p`
  transition: 0.2s ease;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.primaryFont};
  width: 100%;
  text-align: center;
  margin-top: 20px;
`;
