import { Fragment, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCheckScreenType } from '../../hooks';
import { useTariffScope, useToastsScope, useUserScope } from '../../scopes';
import { Button, Card, Input, Modal } from '../../UI';
import { ButtonsWrapper, TariffLoader, Title, Wrapper } from './styled';
import { PrivateRoutes, tariffLimits } from '../../consts';
import { AuthService } from '../../api';
import { getFormattedDate } from '../../utils';

type FormFields = 'password' | 'repeatedPassword';

export const ProfilePage = () => {
  const navigate = useNavigate();
  const { user, provider } = useUserScope();
  const { isMobile } = useCheckScreenType();
  const { showToast } = useToastsScope();
  const { tariff, isTariffLoading, declineSubscription, isSubscriptionDeclining } =
    useTariffScope();
  const [isDeclineSubscriptionModalOpen, setIsDeclineSubscriptionModalOpen] = useState(false);

  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');
  const [invalidFields, setInvalidFields] = useState<FormFields[]>([]);
  const [isChangingPassword, setIsChangingPassword] = useState(false);

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

      await AuthService.changePassword(password);

      setPassword('');
      setRepeatedPassword('');

      showToast('Пароль успешно сменен', 'success');
    } catch (e) {
      showToast('Произошла ошибка при смене пароля', 'failure');
    } finally {
      setIsChangingPassword(false);
    }
  };

  const handleImproveTariffClick = () => {
    navigate(PrivateRoutes.Tariffs);
  };

  return (
    <Wrapper $isMobile={isMobile}>
      {isDeclineSubscriptionModalOpen && (
        <Modal
          isSubmitting={isSubscriptionDeclining}
          onSubmit={async () => await declineSubscription()}
          onClose={() => setIsDeclineSubscriptionModalOpen(false)}
          title="Отменить подписку?"
          description="Продление будет отключено, а оплаченный тариф продолжит работать до окончания периода подписки"
          submitText="Подтвердить"
          declineText="Закрыть"
        />
      )}
      <Card width="100%" height="fit-content">
        <Title>Данные</Title>
        <Input label="Почта" value={user?.email} disabled />
        {provider === 'email' && (
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
            <Button
              onClick={handleChangePassword}
              isLoading={isChangingPassword}
              disabled={isChangingPassword}
            >
              Сменить пароль
            </Button>
          </Fragment>
        )}
        {provider === 'vk' && <Input label="Способ входа" value="VK ID" disabled />}
        {provider === 'yandex' && <Input label="Способ входа" value="Yandex ID" disabled />}
      </Card>
      <Card width="100%" height="fit-content">
        <Title>Подписка</Title>
        {isTariffLoading ? (
          <TariffLoader />
        ) : (
          <Fragment>
            <Input
              label="Текущий тариф"
              value={tariffLimits[tariff?.plan || 'trial'].name}
              readOnly
            />
            {tariff?.plan !== 'trial' && (
              <Input
                label={
                  tariff?.paymentMethodId ? 'Дата продления подписки' : 'Дата окончания подписки'
                }
                value={getFormattedDate(tariff?.endAt || '')}
                readOnly
              />
            )}
            <Input
              label="Доступно созданий"
              value={`${tariff?.creations || 0} из ${
                tariffLimits[tariff?.plan || 'trial'].creations
              }`}
              readOnly
            />
            <Input
              label="Доступно редактирований"
              value={`${tariff?.edits || 0} из ${tariffLimits[tariff?.plan || 'trial'].edits}`}
              readOnly
            />
            <ButtonsWrapper>
              <Button onClick={handleImproveTariffClick}>К тарифам</Button>
              {tariff?.paymentMethodId && (
                <Button
                  onClick={() => setIsDeclineSubscriptionModalOpen(true)}
                  disabled={isSubscriptionDeclining}
                >
                  Отменить подписку
                </Button>
              )}
            </ButtonsWrapper>
          </Fragment>
        )}
      </Card>
    </Wrapper>
  );
};
