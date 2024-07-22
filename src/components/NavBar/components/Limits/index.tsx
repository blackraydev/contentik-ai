import { useNavigate } from 'react-router-dom';
import { Progress } from '../../../../UI';
import { PrivateRoutes, tariffLimits } from '../../../../consts';
import { useCheckScreenType } from '../../../../hooks';
import {
  ButtonStyled,
  LimitsBody,
  LimitsButtonMobile,
  LimitsIconMobile,
  LimitsLoader,
  LimitsStyled,
  LimitsText,
  LimitsWrapper,
  MagicIcon,
  PenIcon,
  TariffPlan,
  TariffTitle,
} from './styled';
import { useTariffScope } from '../../../../scopes';

type LimitsProps = {
  isMobileOpen?: boolean;
  setOpen?: (open: boolean) => void;
};

export const Limits = ({ isMobileOpen, setOpen }: LimitsProps) => {
  const { isMobile, isTablet } = useCheckScreenType();
  const { tariff, isTariffLoading } = useTariffScope();
  const navigate = useNavigate();

  if (!tariff || isTariffLoading) {
    return (
      <LimitsStyled>
        <LimitsLoader />
      </LimitsStyled>
    );
  }

  const handleClick = () => {
    navigate(PrivateRoutes.Tariffs);
    setOpen?.(false);
  };

  if (!isMobileOpen && (isMobile || isTablet)) {
    return (
      <LimitsButtonMobile onClick={() => navigate(PrivateRoutes.Tariffs)}>
        <LimitsIconMobile />
      </LimitsButtonMobile>
    );
  }

  return (
    <LimitsStyled>
      <LimitsWrapper>
        <TariffTitle>Тариф</TariffTitle>
        <TariffPlan>{tariffLimits[tariff.plan].name}</TariffPlan>

        <LimitsBody>
          <MagicIcon />
          <LimitsText>
            {tariff.creations} из {tariffLimits[tariff.plan].creations}
          </LimitsText>
        </LimitsBody>
        <Progress
          width="100%"
          progress={(tariff.creations / tariffLimits[tariff.plan].creations) * 100}
        />

        <LimitsBody>
          <PenIcon />
          <LimitsText>
            {tariff.edits} из {tariffLimits[tariff.plan].edits}
          </LimitsText>
        </LimitsBody>
        <Progress width="100%" progress={(tariff.edits / tariffLimits[tariff.plan].edits) * 100} />

        <ButtonStyled onClick={handleClick}>
          {tariff.plan === 'expert' ? 'Восполнить лимиты' : 'Улучшить тариф'}
        </ButtonStyled>
      </LimitsWrapper>
    </LimitsStyled>
  );
};
