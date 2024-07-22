import { CreateContentScope } from '../CreateContentScope';
import { EditContentScope } from '../EditContentScope';
import { GenerationsScope } from '../GenerationsScope';
import { TariffScope } from '../TariffScope';

type PrivateScopeComposerProps = {
  children: React.ReactNode;
};

export const PrivateScopeComposer = ({ children }: PrivateScopeComposerProps) => {
  return (
    <TariffScope>
      <CreateContentScope>
        <EditContentScope>
          <GenerationsScope>{children}</GenerationsScope>
        </EditContentScope>
      </CreateContentScope>
    </TariffScope>
  );
};
