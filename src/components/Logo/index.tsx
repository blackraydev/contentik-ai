import { LogoStyled, LogoText, LogoWrapper } from './styled';

export const Logo = () => {
  return (
    <LogoWrapper rel="noreferrer noopener" href="https://contentik-ai.ru">
      <LogoStyled src="./img/logo.png" />
      <LogoText>Contentik AI</LogoText>
    </LogoWrapper>
  );
};
