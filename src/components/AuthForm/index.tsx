import { Fragment, useEffect, useMemo, useState } from 'react';
import * as VKID from '@vkid/sdk';
import { Input } from '../../UI';
import { useThemeScope, useUserScope } from '../../scopes';
import { useCheckScreenType } from '../../hooks';
import { FormFields } from './types';
import {
  AuthButtonContainer,
  AuthFormStyled,
  EnterLabel,
  EnterLink,
  ForgotPasswordLabel,
  LabelSeparator,
  PublicOfferLabel,
  PublicOfferLabelLink,
  SignInButton,
  Title,
  YandexAuthButton,
  YandexLogo,
} from './styled';
import { useNavigate } from 'react-router-dom';
import { AuthType } from '../../types';
import { PublicRoutes } from '../../consts';

export const AuthForm = () => {
  const navigate = useNavigate();
  const [authType, setAuthType] = useState<AuthType>('sign-up');
  const { isDarkTheme } = useThemeScope();
  const { isMobile } = useCheckScreenType();
  const { login, register, setIsAuthenticating } = useUserScope();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [invalidFields, setInvalidFields] = useState<FormFields[]>([]);

  useEffect(() => {
    VKID.Config.init({
      app: Number(import.meta.env.VITE_VK_CLIENT_ID) || 0,
      redirectUrl: import.meta.env.VITE_CLIENT_URL,
      state: 'dj29fnsadjsd82',
      codeVerifier: 'FGH767Gd65',
      mode: VKID.ConfigAuthMode.Redirect,
      scope: 'email',
    });

    const oneTap = new VKID.OneTap();
    const container = document.getElementById('VkIdSdkOneTap');

    if (container) {
      oneTap
        .render({
          container,
          scheme: isDarkTheme ? VKID.Scheme.DARK : VKID.Scheme.LIGHT,
          lang: VKID.Languages.RUS,
          fastAuthEnabled: false,
          styles: {
            height: 48,
          },
        })
        .on(VKID.WidgetEvents.ERROR, (e: any) => console.log(e));
    }

    return () => {
      oneTap.close();
    };
  }, []);

  const isInvalid = useMemo(() => {
    if (authType === 'sign-in') {
      return !email.trim() || !password.trim();
    }
    return (
      !email.trim() ||
      !password.trim() ||
      password.trim().length < 6 ||
      password !== repeatedPassword
    );
  }, [authType, email, password, repeatedPassword]);

  const validate = () => {
    if (!email.trim()) {
      setInvalidFields((prev) => [...prev, 'email']);
    }
    if (!password.trim() || password.trim().length < 6) {
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
      console.error(e);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleYandexAuth = () => {
    const CLIENT_ID = import.meta.env.VITE_YANDEX_CLIENT_ID || '0';
    const REDIRECT_URI = import.meta.env.VITE_CLIENT_URL;
    const authUrl = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;

    setIsAuthenticating(true);
    window.location.href = authUrl;
  };

  const handleSwitchAuthType = () => {
    setAuthType((prevAuthType) => {
      if (prevAuthType === 'sign-in') {
        return 'sign-up';
      }

      return 'sign-in';
    });
  };

  const handleNavigateToResetPassword = () => {
    navigate(PublicRoutes.Reset);
  };

  return (
    <AuthFormStyled $isMobile={isMobile}>
      <Title>{authType === 'sign-in' ? 'Вход в аккаунт' : 'Создание аккаунта'}</Title>
      <EnterLabel>
        {authType === 'sign-in' ? (
          <Fragment>
            Нет аккаунта? <EnterLink onClick={handleSwitchAuthType}>Зарегистрироваться</EnterLink>
          </Fragment>
        ) : (
          <Fragment>
            Уже есть аккаунт? <EnterLink onClick={handleSwitchAuthType}>Войти</EnterLink>
          </Fragment>
        )}
      </EnterLabel>
      <Input
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          removeInvalidField('email');
        }}
        placeholder="Email"
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
          error={{
            visible: invalidFields.includes('password'),
            text: password.length < 6 ? 'Минимум 6 символов' : 'Обязательное поле',
          }}
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
      {authType === 'sign-in' && (
        <ForgotPasswordLabel>
          <EnterLink onClick={handleNavigateToResetPassword}>Восстановить пароль</EnterLink>
        </ForgotPasswordLabel>
      )}
      <SignInButton onClick={handleSubmit} isLoading={isSubmitting}>
        {authType === 'sign-in' ? 'Войти' : 'Зарегистрироваться'}
      </SignInButton>
      <LabelSeparator $isMobile={isMobile}>Или</LabelSeparator>
      <AuthButtonContainer id="VkIdSdkOneTap" onClick={() => setIsAuthenticating(true)} />
      <AuthButtonContainer>
        <YandexAuthButton onClick={handleYandexAuth}>
          <YandexLogo src="./img/yandex.png" />
          Войти с Яндекс ID
        </YandexAuthButton>
      </AuthButtonContainer>
      <PublicOfferLabel>
        Продолжая, вы соглашаетесь c{' '}
        <PublicOfferLabelLink
          target="_blank"
          href="https://contentik-ai.ru/offer"
          rel="noreferrer noopener"
        >
          публичной&nbsp;офертой
        </PublicOfferLabelLink>
      </PublicOfferLabel>
    </AuthFormStyled>
  );
};
