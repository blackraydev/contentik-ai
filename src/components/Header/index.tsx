import { ThemeToggle } from '../ThemeToggle';
import { HeaderStyled, Logo, LogoText, LogoWrapper } from './styled';

export const Header = () => {
  return (
    <HeaderStyled>
      <LogoWrapper>
        <Logo src="logo.png" />
        <LogoText>Contentik</LogoText>
      </LogoWrapper>
      <ThemeToggle />
    </HeaderStyled>
  );
};
