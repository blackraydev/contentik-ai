import styled, { css } from 'styled-components';

export const LayoutMainStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 30px;
  overflow: hidden;
  height: 100%;
`;

export const LayoutChildrenStyled = styled.div<{ $isMobile: boolean }>`
  display: flex;
  height: 100%;
  overflow: hidden;
  height: 100%;
`;

export const LayoutStyled = styled.div<{ $isMobile: boolean; $isTablet: boolean }>`
  display: flex;
  width: 100%;
  gap: 30px;
  padding: ${({ $isMobile }) => ($isMobile ? '10px 15px' : '25px')};
  padding-bottom: 0;
  height: ${({ $isMobile }) => ($isMobile ? '100%' : '100vh')};
  overflow: hidden;

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
