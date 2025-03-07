import styled, { css } from 'styled-components';

export const SunAndMoon = styled.svg`
  transition: 0.2s ease;
  width: 32px;
  height: 32px;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke: currentColor;
  fill: none;
  color: ${({ theme }) => theme.colors.icon};
`;

export const ThemeToggleStyled = styled.div<{ $isDarkTheme: boolean; $isMobile: boolean }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  z-index: 1;

  ${({ $isDarkTheme }) => css`
    ${SunAndMoon} {
      transform: rotate(${$isDarkTheme ? 90 : 40}deg);
    }
    ${MoonCircle} {
      cx: ${$isDarkTheme ? 100 : 60}%;
      cy: ${$isDarkTheme ? 0 : 25}%;
    }
    ${SunBeams} {
      opacity: ${$isDarkTheme ? 1 : 0};
    }
  `}

  ${SunAndMoon} {
    width: ${({ $isMobile }) => ($isMobile ? '24px' : '32px')};
    height: ${({ $isMobile }) => ($isMobile ? '24px' : '32px')};
  }
`;

export const Moon = styled.mask``;

export const MoonRect = styled.rect`
  width: 100%;
  height: 100%;
  fill: ${({ theme }) => theme.colors.white};
`;

export const MoonCircle = styled.circle`
  transition: 0.2s ease;
  fill: ${({ theme }) => theme.colors.black};
`;

export const Sun = styled.circle`
  transition: 0.2s ease;
  fill: currentColor;
`;

export const SunBeams = styled.g`
  transition: 0.2s ease;
  stroke: currentColor;
`;

export const SunBeamLine = styled.line``;
