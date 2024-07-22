import { ThemeScope } from '../ThemeScope';
import { ToastsScope } from '../ToastScope';
import { UserScope } from '../UserScope';

type PublicScopeComposerProps = {
  children: React.ReactNode;
};

export const PublicScopeComposer = ({ children }: PublicScopeComposerProps) => {
  return (
    <ThemeScope>
      <ToastsScope>
        <UserScope>{children}</UserScope>
      </ToastsScope>
    </ThemeScope>
  );
};
