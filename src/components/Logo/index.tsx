import { LogoStyled, LogoText, LogoWrapper } from './styled';

export const Logo = () => {
  return (
    <LogoWrapper>
      <LogoStyled src="/contentik-ai/logo.png" />
      <LogoText>Contentik AI</LogoText>
    </LogoWrapper>
  );
};
