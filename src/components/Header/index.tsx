import { ThemeToggle } from '../ThemeToggle';
import { HeaderStyled, LogoText, LogoWrapper } from './styled';

export const Header = () => {
  return (
    <HeaderStyled>
      <LogoWrapper>
        <LogoText>Contentik</LogoText>
      </LogoWrapper>
      <ThemeToggle />
    </HeaderStyled>
  );
};
