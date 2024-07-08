import { Button } from '../../UI';
import { useCheckScreenType } from '../../hooks';
import { useUserScope } from '../../scopes';
import { Label, SubmitAuthFormStyled, Title } from './styled';

export const SubmitAuthForm = () => {
  const { setSession, setUser, user } = useUserScope();
  const { isMobile } = useCheckScreenType();

  const handleLogout = () => {
    setSession(null);
    setUser(null);
  };

  return (
    <SubmitAuthFormStyled $isMobile={isMobile}>
      <Title>Подтвердите аккаунт</Title>
      <Label>
        Мы выслали письмо на почту{` ${user?.email}` ?? ''}. <br />
        Для подтверждения аккаунта необходимо перейти по ссылке в письме.
      </Label>
      <Button onClick={handleLogout}>Назад</Button>
    </SubmitAuthFormStyled>
  );
};
