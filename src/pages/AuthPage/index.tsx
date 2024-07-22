import { AuthForm, Features, SubmitAuthForm } from '../../components';
import { ThemeToggle, Logo } from '../../components';
import { useCheckScreenType } from '../../hooks';
import { useUserScope } from '../../scopes';
import { AuthBlock, AuthHeader, AuthPageStyled, WelcomeBlock } from './styled';

export const AuthPage = () => {
  const { user } = useUserScope();
  const { isMobile } = useCheckScreenType();

  const renderForm = () => {
    if (user && !user.isActivated) {
      return <SubmitAuthForm />;
    }

    return <AuthForm />;
  };

  return (
    <AuthPageStyled>
      <AuthBlock $isMobile={isMobile}>
        <AuthHeader>
          <Logo />
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
