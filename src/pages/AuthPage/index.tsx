import { AuthForm } from '../../components';
import { ThemeToggle } from '../../components';
import {
  AuthBlock,
  AuthHeader,
  AuthPageStyled,
  Logo,
  LogoText,
  LogoWrapper,
  WelcomeBlock,
} from './styled';

export const AuthPage = () => {
  return (
    <AuthPageStyled>
      <AuthBlock>
        <AuthHeader>
          <LogoWrapper>
            <Logo src="logo.png" alt="logo" />
            <LogoText>ontentik</LogoText>
          </LogoWrapper>
          <ThemeToggle />
        </AuthHeader>
        <AuthForm />
      </AuthBlock>
      <WelcomeBlock></WelcomeBlock>
    </AuthPageStyled>
  );
};
