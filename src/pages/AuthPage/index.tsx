import { AuthForm } from '../../components';
import { ThemeToggle } from '../../components';
import {
  AuthBlock,
  AuthHeader,
  AuthPageStyled,
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
            <LogoText>Contentik</LogoText>
          </LogoWrapper>
          <ThemeToggle />
        </AuthHeader>
        <AuthForm />
      </AuthBlock>
      <WelcomeBlock></WelcomeBlock>
    </AuthPageStyled>
  );
};
