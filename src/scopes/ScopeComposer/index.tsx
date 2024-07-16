import { CreateContentScope } from '../CreateContentScope';
import { EditContentScope } from '../EditContentScope';
import { GenerationsScope } from '../GenerationsScope';
import { OptimizationScope } from '../OptimizationScope';
import { ThemeScope } from '../ThemeScope';
import { ToastsScope } from '../ToastScope';
import { TonalityScope } from '../TonalityPage';
import { UserScope } from '../UserScope';

type ScopeComposerProps = {
  children: React.ReactNode;
};

export const ScopeComposer = ({ children }: ScopeComposerProps) => {
  return (
    <ThemeScope>
      <UserScope>
        <CreateContentScope>
          <EditContentScope>
            <GenerationsScope>
              <OptimizationScope>
                <TonalityScope>
                  <ToastsScope>{children}</ToastsScope>
                </TonalityScope>
              </OptimizationScope>
            </GenerationsScope>
          </EditContentScope>
        </CreateContentScope>
      </UserScope>
    </ThemeScope>
  );
};
