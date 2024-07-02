import styled, { css } from 'styled-components';

export const LayoutMainStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 30px;
`;

export const LayoutChildrenStyled = styled.div`
  display: flex;
  height: 100%;
`;

export const LayoutStyled = styled.div<{ $isMobile: boolean; $isTablet: boolean }>`
  display: flex;
  width: 100%;
  height: 100vh;
  gap: 30px;
  padding: ${({ $isMobile }) => ($isMobile ? '10px 15px' : '25px')};
  padding-bottom: 0;

  ${LayoutMainStyled} {
    width: calc(100% - 250px);
    gap: 30px;

    ${({ $isMobile }) =>
      $isMobile &&
      css`
        width: 100%;
        gap: 10px;
      `};

    ${({ $isTablet }) =>
      $isTablet &&
      css`
        width: calc(100% - 36px);
      `};
  }
`;
