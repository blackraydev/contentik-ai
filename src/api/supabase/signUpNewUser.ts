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
      emailRedirectTo: 'https://localhost:5173/contentik-ai/app',
    },
  });

  return { data, error };
};
