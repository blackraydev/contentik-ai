import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { AuthService } from '../../api';
import { User } from '../../types';
import { useToastsScope } from '../ToastScope';
import { useNavigate } from 'react-router-dom';
import { PublicRoutes } from '../../consts';

type UserScopeProps = {
  children: React.ReactNode;
};

type UserContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  provider: 'email' | 'vk' | 'yandex' | null;
  isAuthenticating: boolean;
  setIsAuthenticating: React.Dispatch<React.SetStateAction<boolean>>;
  isNotAuthenticated: boolean;
  register: (email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  resendActivationLink: (email: string) => Promise<void>;
};

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
  provider: null,
  isAuthenticating: true,
  setIsAuthenticating: () => {},
  isNotAuthenticated: true,
  register: async () => {},
  login: async () => {},
  logout: async () => {},
  resendActivationLink: async () => {},
});

export const useUserScope = () => useContext(UserContext);

export const UserScope = ({ children }: UserScopeProps) => {
  const navigate = useNavigate();
  const { showToast } = useToastsScope();
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [provider, setProvider] = useState<'email' | 'vk' | 'yandex' | null>(null);

  const isNotAuthenticated = useMemo(() => !user || !user.isActivated, [user]);

  useEffect(() => {
    const token = localStorage.getItem('token');

    const refreshAccessToken = async () => {
      try {
        if (token) {
          setIsAuthenticating(true);

          const isVKToken = token.slice(0, 2) === 'vk';
          const isYandexToken = token.slice(0, 1) === 'y';

          const refreshFn = async () => {
            if (isVKToken) {
              return await AuthService.refreshVK();
            }
            if (isYandexToken) {
              return await AuthService.refreshYandex();
            }

            return await AuthService.refresh();
          };

          const { data } = await refreshFn();

          localStorage.setItem('token', data.accessToken);
          setUser(data.user);

          if (isVKToken) {
            setProvider('vk');
          } else if (isYandexToken) {
            setProvider('yandex');
          } else {
            setProvider('email');
          }
        }
      } catch (e: any) {
        console.log(e.response?.data?.message);
      } finally {
        setIsAuthenticating(false);
      }
    };

    refreshAccessToken();

    // Перезапрашиваем токен каждые 59 минут
    const interval = setInterval(refreshAccessToken, 59 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const url = window.location.href;

    if (!url) return;

    const correctUrl = url.includes('#') ? url.replace('#', '?') : url;
    const urlObject = new URL(correctUrl);
    const code = urlObject.searchParams.get('code');
    const cid = urlObject.searchParams.get('cid');
    const state = urlObject.searchParams.get('state');
    const deviceId = urlObject.searchParams.get('device_id');
    const resetToken = urlObject.searchParams.get('resetToken');
    const email = urlObject.searchParams.get('email');

    // Восстановление пароля
    if (resetToken && email) {
      navigate(PublicRoutes.Reset, { state: { resetToken, email } });
    }

    // Авторизация через VK
    if (code && state && deviceId) {
      window.history.replaceState(null, '', window.location.pathname);

      setIsAuthenticating(true);

      AuthService.loginVK(code, state, deviceId)
        .then(({ data }) => {
          localStorage.setItem('token', data.accessToken);
          setUser(data.user);
          setProvider('vk');
        })
        .catch(() => {
          showToast(
            'Произошла ошибка. Попробуйте зайти через Яндекс ID или с помощью Email',
            'failure',
          );
        })
        .finally(() => setIsAuthenticating(false));
    }

    // Авторизация через Яндекс
    if (code && cid) {
      window.history.replaceState(null, '', window.location.pathname);

      setIsAuthenticating(true);

      AuthService.loginYandex(code)
        .then(({ data }) => {
          localStorage.setItem('token', data.accessToken);
          setUser(data.user);
          setProvider('yandex');
        })
        .catch(() => {
          showToast(
            'Произошла ошибка. Попробуйте зайти через VK ID или с помощью Email',
            'failure',
          );
        })
        .finally(() => setIsAuthenticating(false));
    }
  }, [window.location.href]);

  const register = async (email: string, password: string) => {
    try {
      const { data } = await AuthService.registration(email, password);

      localStorage.setItem('token', data.accessToken);
      setUser(data.user);
      setProvider('email');
    } catch (e: any) {
      if (e?.response?.status === 400) {
        showToast(
          'Пользователь с таким Email уже зарегистрирован. Если это ваш Email, попробуйте зайти через VK ID или Яндекс ID',
          'failure',
        );
      } else {
        showToast('Регистрация пока недоступна', 'failure');
      }
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const { data } = await AuthService.login(email, password);

      localStorage.setItem('token', data.accessToken);
      setUser(data.user);
      setProvider('email');
    } catch (e: any) {
      if (e?.response?.status === 400) {
        showToast('Аккаунт с такими данными не найден', 'failure');
      } else {
        showToast('Авторизация пока недоступна', 'failure');
      }
    }
  };

  const logout = async () => {
    try {
      setIsAuthenticating(true);

      if (provider === 'vk') {
        await AuthService.logoutVK();
      } else if (provider === 'yandex') {
        await AuthService.logoutYandex();
      } else {
        await AuthService.logout();
      }

      localStorage.removeItem('token');

      setUser(null);
      setProvider(null);
    } catch (e: any) {
      console.log(e.response?.data?.message);
    } finally {
      setIsAuthenticating(false);
    }
  };

  const resendActivationLink = async (email: string) => {
    try {
      await AuthService.resendActivationLink(email);
    } catch (e: any) {
      showToast('Произошла ошибка при активации аккаунта', 'failure');
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        provider,
        isAuthenticating,
        setIsAuthenticating,
        isNotAuthenticated,
        register,
        login,
        logout,
        resendActivationLink,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
