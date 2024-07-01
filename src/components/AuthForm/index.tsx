import { Fragment, useEffect, useMemo, useRef, useState } from 'react';
import { signInWithEmail, signUpNewUser, signInWithOAuth } from '../../api';
import { Input } from '../../UI';
import { useUserScope } from '../../scopes';
import { FormFields } from './types';
import {
  AuthFormStyled,
  EnterLabel,
  EnterLink,
  GoogleIcon,
  Label,
  LabelSeparator,
  SignInButton,
  Title,
} from './styled';

type AuthType = 'sign-in' | 'sign-up';

export const AuthForm = () => {
  const { setSession, setUser } = useUserScope();
  const [authType, setAuthType] = useState<AuthType>('sign-up');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [invalidFields, setInvalidFields] = useState<FormFields[]>([]);
  const [isOAuthLoading, setIsOAuthLoading] = useState(false);

  const oAuthTimerRef = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
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

      const authFunc = authType === 'sign-in' ? signInWithEmail : signUpNewUser;
      const { data, error } = await authFunc({ email, password });

      if (error) {
        throw error;
      }

      const { user, session } = data;

      setUser(user);
      setSession(session);
    } catch (e) {
      console.log(e);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOAuth = async (provider: 'google') => {
    try {
      setIsOAuthLoading(true);
      await signInWithOAuth({ provider });
    } finally {
      oAuthTimerRef.current = setTimeout(() => setIsOAuthLoading(false), 10000);
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
    <AuthFormStyled>
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
      <LabelSeparator>Или войти через</LabelSeparator>
      <SignInButton isLoading={isOAuthLoading} onClick={() => handleOAuth('google')}>
        <GoogleIcon />
        Google
      </SignInButton>
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
