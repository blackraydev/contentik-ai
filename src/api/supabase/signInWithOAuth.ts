import { Provider } from '@supabase/supabase-js';
import { supabase } from './supabase';

type SignInWithOAuthProps = {
  provider: Provider;
};

export const signInWithOAuth = async ({ provider }: SignInWithOAuthProps) => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: 'https://localhost:5173/contentik-ai/app',
      queryParams: {
        prompt: 'consent',
      },
    },
  });

  return { data, error };
};
