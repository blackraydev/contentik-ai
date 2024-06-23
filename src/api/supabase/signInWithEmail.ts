import { supabase } from './supabase';

type SignInWithEmailProps = {
  email: string;
  password: string;
};

export const signInWithEmail = async ({ email, password }: SignInWithEmailProps) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  return { data, error };
};
