import { AuthForm, Features, SubmitAuthForm } from '../../components';
import { ThemeToggle } from '../../components';
import { useCheckScreenType } from '../../hooks';
import { useUserScope } from '../../scopes';
import { isUserEmailVerified } from '../../utils';
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
  const { user } = useUserScope();
  const { isMobile } = useCheckScreenType();

  const renderForm = () => {
    if (user && !isUserEmailVerified(user)) {
      return <SubmitAuthForm />;
    }

    return <AuthForm />;
  };

  return (
    <AuthPageStyled>
      <AuthBlock $isMobile={isMobile}>
        <AuthHeader>
          <LogoWrapper>
            <Logo src="/contentik-ai/logo.png" />
            <LogoText>Contentik</LogoText>
          </LogoWrapper>
          <ThemeToggle />
        </AuthHeader>
        {renderForm()}
      </AuthBlock>
      {!isMobile && (
        <WelcomeBlock>
          <Features />
        </WelcomeBlock>
      )}
    </AuthPageStyled>
  );
};
