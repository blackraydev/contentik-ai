import { User } from '@supabase/supabase-js';

export const isUserEmailVerified = (user?: User | null) => {
  return Boolean(user?.user_metadata?.email_confirmed_at);
};
