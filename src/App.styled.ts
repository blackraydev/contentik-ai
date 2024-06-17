import styled, { createGlobalStyle } from 'styled-components';

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
    font-family: 'Rubik', sans-serif;
  }

  html {
    transition: 0.2s ease;
    background: ${({ theme }) => theme.colors.primaryBg};
    overflow: hidden;
  }
`;

export const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  padding: 30px;
  gap: 20px;
`;

export const Wrapper = styled.div<{ $isMobile: boolean }>`
  display: flex;
  flex-direction: ${({ $isMobile }) => ($isMobile ? 'column' : 'row')};
  justify-content: center;
  height: 100vh;
  width: 100%;
  gap: 50px;
  padding: 10px;
  overflow-y: ${({ $isMobile }) => ($isMobile ? 'scroll' : 'none')};

  &::-webkit-scrollbar {
    display: none;
  }
`;
