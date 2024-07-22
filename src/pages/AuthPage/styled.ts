import styled from 'styled-components';

export const AuthPageStyled = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.colors.mainBg};
  transition: 0.2s ease;
`;

export const WelcomeBlock = styled.div`
  overflow: hidden;
  margin: 30px;
  transition: 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: calc(100% - 60px);
  border: none;
  outline: none;
  background: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.white};
  position: relative;
  z-index: 0;
  border-radius: 15px;

  &:before {
    content: '';
    background: linear-gradient(
      -45deg,
      rgb(227, 185, 251),
      rgb(193, 109, 247),
      rgb(126, 106, 239),
      rgb(91, 77, 236)
    );
    position: absolute;
    background-size: 400% 400%;
    z-index: -1;
    width: 100%;
    height: 100%;
    animation: glowing 10s ease infinite;
    transition: opacity 0.2s ease-out;
    border-radius: 15px;
    opacity: 1;
  }

  @keyframes glowing {
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }
`;

export const AuthHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
`;

export const LogoWrapper = styled.div`
  cursor: pointer;
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Logo = styled.img`
  transition: 0.2s ease;
  width: 40px;
  height: 40px;
  margin-right: 10px;
  background: ${({ theme }) => theme.colors.logo};
  padding: 8px;
  border-radius: 10px;
`;

export const LogoText = styled.p`
  transition: 0.2s ease;
  font-weight: 500;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primaryFont};
  margin-left: -8px;
`;

export const AuthBlock = styled.div<{ $isMobile: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: ${({ $isMobile }) => ($isMobile ? '100%' : '50%')};
  height: 100%;
  position: relative;
  padding: ${({ $isMobile }) => ($isMobile ? '30px' : '40px 60px')};

  ${AuthHeader} {
    padding: ${({ $isMobile }) => ($isMobile ? '30px' : '50px')};
  }
`;
