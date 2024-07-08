import { useNavigate } from 'react-router-dom';
import { Progress } from '../../../../UI';
import { PrivateRoutes } from '../../../../consts';
import { useCheckScreenType } from '../../../../hooks';
import {
  ButtonStyled,
  LimitsBody,
  LimitsButtonMobile,
  LimitsIconMobile,
  LimitsStyled,
  LimitsText,
  LimitsWrapper,
  MagicIcon,
  PenIcon,
  TariffPlan,
  TariffTitle,
} from './styled';

type LimitsProps = {
  isMobileOpen?: boolean;
  setOpen?: (open: boolean) => void;
};

export const Limits = ({ isMobileOpen, setOpen }: LimitsProps) => {
  const { isMobile, isTablet } = useCheckScreenType();
  const navigate = useNavigate();

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
        <TariffPlan>Пробный</TariffPlan>
        <LimitsBody>
          <MagicIcon />
          <LimitsText>4 из 5</LimitsText>
        </LimitsBody>
        <Progress width="100%" progress={80} />
        <LimitsBody>
          <PenIcon />
          <LimitsText>1 из 1</LimitsText>
        </LimitsBody>
        <Progress width="100%" progress={100} />
        <ButtonStyled onClick={handleClick}>Улучшить тариф</ButtonStyled>
      </LimitsWrapper>
    </LimitsStyled>
  );
};
