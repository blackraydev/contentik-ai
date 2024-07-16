import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { AuthService } from '../../api';
import { User } from '../../types';

type UserScopeProps = {
  children: React.ReactNode;
};

type UserContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  isAuthenticating: boolean;
  setIsAuthenticating: React.Dispatch<React.SetStateAction<boolean>>;
  isNotAuthenticated: boolean;
  register: (email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
  isAuthenticating: true,
  setIsAuthenticating: () => {},
  isNotAuthenticated: true,
  register: async () => {},
  login: async () => {},
  logout: async () => {},
});

export const useUserScope = () => useContext(UserContext);

export const UserScope = ({ children }: UserScopeProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  const isNotAuthenticated = useMemo(() => !user || !user.isActivated, [user]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const refreshAccessToken = async () => {
      try {
        if (token) {
          setIsAuthenticating(true);
          const response = await AuthService.refresh();

          localStorage.setItem('token', response.data.accessToken);
          setUser(response.data.user);
        }
      } catch (e) {
        console.log(e.response?.data?.message);
      } finally {
        setIsAuthenticating(false);
      }
    };

    refreshAccessToken();

    const interval = setInterval(refreshAccessToken, 14 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const register = async (email: string, password: string) => {
    try {
      const { data } = await AuthService.registration(email, password);

      localStorage.setItem('token', data.accessToken);
      setUser(data.user);
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const { data } = await AuthService.login(email, password);

      localStorage.setItem('token', data.accessToken);
      setUser(data.user);
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  };

  const logout = async () => {
    try {
      await AuthService.logout();

      localStorage.removeItem('token');
      setUser(null);
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isAuthenticating,
        setIsAuthenticating,
        isNotAuthenticated,
        register,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
