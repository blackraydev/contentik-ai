import { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Input } from '../../UI';
import { useCheckScreenType } from '../../hooks';
import { PublicRoutes } from '../../consts';
import { AuthService } from '../../api';
import { useToastsScope } from '../../scopes';
import { ButtonsWrapper, Label, ResetPasswordFormStyled, Title } from './styled';

type FormFields = 'password' | 'repeatedPassword';

export const ResetPasswordForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isMobile } = useCheckScreenType();
  const { showToast } = useToastsScope();

  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');
  const [invalidFields, setInvalidFields] = useState<FormFields[]>([]);
  const [isChangingPassword, setIsChangingPassword] = useState(false);

  const email = location?.state?.email;
  const resetToken = location?.state?.resetToken;

  const isInvalid = useMemo(() => {
    return !password.trim() || password.trim().length < 6 || password !== repeatedPassword;
  }, [password, repeatedPassword]);

  const validate = () => {
    if (!password.trim() || password.trim().length < 6) {
      setInvalidFields((prev) => [...prev, 'password']);
    }
    if (!repeatedPassword.trim() || password !== repeatedPassword) {
      setInvalidFields((prev) => [...prev, 'repeatedPassword']);
    }
  };

  const removeInvalidField = (field: FormFields) => {
    setInvalidFields((prev) => prev.filter((it) => it !== field));
  };

  const handleChangePassword = async () => {
    try {
      if (isInvalid) {
        return validate();
      }

      setIsChangingPassword(true);

      await AuthService.resetPassword(resetToken, password);

      setPassword('');
      setRepeatedPassword('');

      showToast('Пароль успешно сменен', 'success');

      location.state = null;
      navigate(PublicRoutes.Auth);
    } catch (e) {
      showToast('Произошла ошибка при смене пароля', 'failure');
    } finally {
      setIsChangingPassword(false);
    }
  };

  const handleNavigateToAuth = async () => {
    navigate(PublicRoutes.Auth);
  };

  return (
    <ResetPasswordFormStyled $isMobile={isMobile}>
      <Title>Восстановление доступа</Title>
      <Label>Введите новый пароль и восстановите доступ к аккаунту {email}</Label>
      <Input
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          removeInvalidField('password');
        }}
        placeholder="Новый пароль"
        type="password"
        error={{
          visible: invalidFields.includes('password'),
          text: password.length < 6 ? 'Минимум 6 символов' : 'Обязательное поле',
        }}
      />
      <Input
        value={repeatedPassword}
        onChange={(e) => {
          setRepeatedPassword(e.target.value);
          removeInvalidField('repeatedPassword');
        }}
        placeholder="Повторный пароль"
        type="password"
        error={{
          visible: invalidFields.includes('repeatedPassword'),
          text: repeatedPassword ? 'Пароли не совпадают' : 'Обязательное поле',
        }}
      />
      <ButtonsWrapper>
        <Button
          onClick={handleChangePassword}
          isLoading={isChangingPassword}
          disabled={isChangingPassword}
        >
          Восстановить
        </Button>
        <Button onClick={handleNavigateToAuth}>Назад</Button>
      </ButtonsWrapper>
    </ResetPasswordFormStyled>
  );
};
