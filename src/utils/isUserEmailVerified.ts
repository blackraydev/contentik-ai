import { User } from '@supabase/supabase-js';

export const isUserEmailVerified = (user?: User | null) => {
  return Boolean(user?.email_confirmed_at);
};
