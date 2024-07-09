import { Session, User } from '@supabase/supabase-js';
import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../../api';

type UserScopeProps = {
  children: React.ReactNode;
};

type UserContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  session: Session | null;
  setSession: React.Dispatch<React.SetStateAction<Session | null>>;
  isAuthenticating: boolean;
  setIsAuthenticating: React.Dispatch<React.SetStateAction<boolean>>;
};

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
  session: null,
  setSession: () => {},
  isAuthenticating: true,
  setIsAuthenticating: () => {},
});

export const useUserScope = () => useContext(UserContext);

export const UserScope = ({ children }: UserScopeProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setIsAuthenticating(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    const url = window.location.href;

    if (!url) return;

    const correctUrl = url.includes('#') ? url.replace('#', '?') : url;
    const urlObject = new URL(correctUrl);
    const accessToken = urlObject.searchParams.get('access_token');
    const refreshToken = urlObject.searchParams.get('refresh_token');

    if (accessToken && refreshToken) {
      supabase.auth
        .setSession({
          access_token: accessToken,
          refresh_token: refreshToken,
        })
        .then(({ data: { user, session } }) => {
          setUser(user);
          setSession(session);
        });
    }
  }, [window.location.href]);

  return (
    <UserContext.Provider
      value={{ user, setUser, session, setSession, isAuthenticating, setIsAuthenticating }}
    >
      {children}
    </UserContext.Provider>
  );
};
