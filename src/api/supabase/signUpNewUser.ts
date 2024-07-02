import { supabase } from './supabase';

type SignUpNewUserProps = {
  email: string;
  password: string;
};

export const signUpNewUser = async ({ email, password }: SignUpNewUserProps) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: 'https://blackraydev.github.io/contentik-ai/app',
    },
  });

  return { data, error };
};
