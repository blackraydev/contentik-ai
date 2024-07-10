import { Fragment, useMemo, useState } from 'react';
import { useCheckScreenType } from '../../hooks';
import { useToastsScope, useUserScope } from '../../scopes';
import { Button, Card, Input } from '../../UI';
import { Title, Wrapper } from './styled';
import { supabase } from '../../api';
import { useNavigate } from 'react-router-dom';
import { PrivateRoutes } from '../../consts';

type FormFields = 'password' | 'repeatedPassword';

export const ProfilePage = () => {
  const navigate = useNavigate();
  const { user } = useUserScope();
  const { isMobile } = useCheckScreenType();
  const { showToast } = useToastsScope();

  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');
  const [invalidFields, setInvalidFields] = useState<FormFields[]>([]);
  const [isChangingPassword, setIsChangingPassword] = useState(false);

  const isInvalid = useMemo(() => {
    return !password.trim() || password !== repeatedPassword;
  }, [password, repeatedPassword]);

  const validate = () => {
    if (!password.trim()) {
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

      await supabase.auth.updateUser({ password });

      setPassword('');
      setRepeatedPassword('');

      showToast('Пароль успешно сменен', 'success');
    } catch (e) {
      console.log(e);
    } finally {
      setIsChangingPassword(false);
    }
  };

  const handleImproveTariffClick = () => {
    navigate(PrivateRoutes.Tariffs);
  };

  return (
    <Wrapper $isMobile={isMobile}>
      <Card width="100%" height="fit-content">
        <Title>Данные</Title>
        <Input label="Почта" value={user?.email} disabled />
        {user?.app_metadata.provider === 'email' && (
          <Fragment>
            <Input
              label="Смена пароля"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                removeInvalidField('password');
              }}
              placeholder="Пароль"
              type="password"
              error={{ visible: invalidFields.includes('password') }}
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
            <Button
              onClick={handleChangePassword}
              isLoading={isChangingPassword}
              disabled={isChangingPassword}
            >
              Сменить пароль
            </Button>
          </Fragment>
        )}
      </Card>
      <Card width="100%" height="fit-content">
        <Title>Подписка</Title>
        <Input label="Текущий тариф" value="Пробный" readOnly />
        <Input label="Дата продления" value={'7 августа'} readOnly />
        <Button onClick={handleImproveTariffClick}>Улучшить тариф</Button>
      </Card>
    </Wrapper>
  );
};
