import { Fragment, useEffect, useMemo, useRef, useState } from 'react';
import * as VKID from '@vkid/sdk';
import { Input } from '../../UI';
import { useThemeScope, useToastsScope, useUserScope } from '../../scopes';
import { FormFields } from './types';
import {
  AuthFormStyled,
  EnterLabel,
  EnterLink,
  Label,
  LabelSeparator,
  SignInButton,
  Title,
  VKAuthContainer,
} from './styled';
import { useCheckScreenType } from '../../hooks';

type AuthType = 'sign-in' | 'sign-up';

export const AuthForm = () => {
  const { isDarkTheme } = useThemeScope();
  const { isMobile } = useCheckScreenType();
  const { showToast } = useToastsScope();
  const { login, register } = useUserScope();
  const [authType, setAuthType] = useState<AuthType>('sign-up');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [invalidFields, setInvalidFields] = useState<FormFields[]>([]);

  const oAuthTimerRef = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    VKID.Config.init({
      app: 52001497, // Идентификатор приложения.
      redirectUrl: 'https://localhost:5173/contentik-ai', // Адрес для перехода после авторизации.
      state: 'dj29fnsadjsd82', // Произвольная строка состояния приложения.
      codeVerifier: 'FGH767Gd65', // Верификатор в виде случайной строки. Обеспечивает защиту передаваемых данных.
      mode: VKID.ConfigAuthMode.InNewTab, // По умолчанию авторизация открывается в новой вкладке.
    });

    // Создание экземпляра кнопки.
    const oneTap = new VKID.OneTap();

    // Получение контейнера из разметки.
    const container = document.getElementById('VkIdSdkOneTap');

    // Проверка наличия кнопки в разметке.
    if (container) {
      // Отрисовка кнопки в контейнере с именем приложения APP_NAME, светлой темой и на русском языке.
      oneTap
        .render({
          container: container,
          scheme: isDarkTheme ? VKID.Scheme.LIGHT : VKID.Scheme.DARK,
          lang: VKID.Languages.RUS,
          fastAuthEnabled: false,
        })
        .on(VKID.WidgetEvents.LOAD, () => VKID.Auth.login({}))
        .on(VKID.WidgetEvents.ERROR, (e: any) => console.log(e));
    }

    return () => {
      clearTimeout(oAuthTimerRef.current);
    };
  }, []);

  const isInvalid = useMemo(() => {
    if (authType === 'sign-in') {
      return !email.trim() || !password.trim();
    }
    return !email.trim() || !password.trim() || password !== repeatedPassword;
  }, [authType, email, password, repeatedPassword]);

  const validate = () => {
    if (!email.trim()) {
      setInvalidFields((prev) => [...prev, 'email']);
    }
    if (!password.trim()) {
      setInvalidFields((prev) => [...prev, 'password']);
    }
    if (authType === 'sign-up' && (!repeatedPassword.trim() || password !== repeatedPassword)) {
      setInvalidFields((prev) => [...prev, 'repeatedPassword']);
    }
  };

  const removeInvalidField = (field: FormFields) => {
    setInvalidFields((prev) => prev.filter((it) => it !== field));
  };

  const handleSubmit = async () => {
    try {
      if (isInvalid) {
        return validate();
      }

      setIsSubmitting(true);

      const authFunc = authType === 'sign-in' ? login : register;
      await authFunc(email, password);
    } catch (e: any) {
      if (e.message === 'Invalid login credentials' && authType === 'sign-in') {
        showToast('Аккаунт с такими данными не найден', 'failure');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSwitchAuthType = () => {
    setAuthType((prevAuthType) => {
      if (prevAuthType === 'sign-in') {
        return 'sign-up';
      }

      return 'sign-in';
    });
  };

  return (
    <AuthFormStyled $isMobile={isMobile}>
      <Title>{authType === 'sign-in' ? 'Вход в аккаунт' : 'Создание аккаунта'}</Title>
      <Label>
        {authType === 'sign-in'
          ? 'Введите свои данные для входа в аккаунт'
          : 'Введите ваши данные, чтобы создать аккаунт'}
      </Label>
      <Input
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          removeInvalidField('email');
        }}
        placeholder="name@example.com"
        error={{ visible: invalidFields.includes('email') }}
      />
      <Fragment>
        <Input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            removeInvalidField('password');
          }}
          placeholder="Пароль"
          type="password"
          error={{ visible: invalidFields.includes('password') }}
        />
        {authType === 'sign-up' && (
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
        )}
      </Fragment>
      <SignInButton onClick={handleSubmit} isLoading={isSubmitting}>
        {authType === 'sign-in' ? 'Войти' : 'Зарегистрироваться'}
      </SignInButton>
      <LabelSeparator $isMobile={isMobile}>Или войти через</LabelSeparator>
      <VKAuthContainer id="VkIdSdkOneTap" />
      <EnterLabel onClick={handleSwitchAuthType}>
        {authType === 'sign-in' ? (
          <Fragment>
            Нет аккаунта? <EnterLink>Зарегистрироваться</EnterLink>
          </Fragment>
        ) : (
          <Fragment>
            Уже есть аккаунт? <EnterLink>Войти</EnterLink>
          </Fragment>
        )}
      </EnterLabel>
    </AuthFormStyled>
  );
};
