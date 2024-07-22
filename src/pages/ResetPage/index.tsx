import { useLocation } from 'react-router-dom';
import { Features, RequestAccessForm, ResetPasswordForm } from '../../components';
import { ThemeToggle, Logo } from '../../components';
import { useCheckScreenType } from '../../hooks';
import { ResetBlock, ResetHeader, ResetPageStyled, WelcomeBlock } from './styled';

export const ResetPage = () => {
  const { isMobile } = useCheckScreenType();
  const location = useLocation();

  const renderForm = () => {
    if (location?.state?.resetToken) {
      return <ResetPasswordForm />;
    }

    return <RequestAccessForm />;
  };

  return (
    <ResetPageStyled>
      <ResetBlock $isMobile={isMobile}>
        <ResetHeader>
          <Logo />
          <ThemeToggle />
        </ResetHeader>
        {renderForm()}
      </ResetBlock>
      {!isMobile && (
        <WelcomeBlock>
          <Features />
        </WelcomeBlock>
      )}
    </ResetPageStyled>
  );
};
