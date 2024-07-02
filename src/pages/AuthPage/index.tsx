import { AuthForm } from '../../components';
import { ThemeToggle } from '../../components';
import { useCheckScreenType } from '../../hooks';
import {
  AuthBlock,
  AuthHeader,
  AuthPageStyled,
  LogoText,
  LogoWrapper,
  WelcomeBlock,
} from './styled';

export const AuthPage = () => {
  const { isMobile } = useCheckScreenType();

  return (
    <AuthPageStyled>
      <AuthBlock $isMobile={isMobile}>
        <AuthHeader>
          <LogoWrapper>
            <LogoText>Contentik</LogoText>
          </LogoWrapper>
          <ThemeToggle />
        </AuthHeader>
        <AuthForm />
      </AuthBlock>
      {!isMobile && <WelcomeBlock></WelcomeBlock>}
    </AuthPageStyled>
  );
};
