import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
    border: none;
    outline: none;
    font-family: 'Rubik', sans-serif !important;
  }

  html {
    transition: 0.2s ease;
    scroll-behavior: smooth;
    background: ${({ theme }) => theme.colors.mainBg};
  }
`;
