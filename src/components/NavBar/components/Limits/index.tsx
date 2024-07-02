import { useNavigate } from 'react-router-dom';
import { Progress } from '../../../../UI';
import {
  ButtonStyled,
  LimitsBody,
  LimitsButtonMobile,
  LimitsIcon,
  LimitsIconMobile,
  LimitsStyled,
  LimitsText,
  LimitsWrapper,
  TariffPlan,
  TariffTitle,
} from './styled';
import { PrivateRoutes } from '../../../../consts';
import { useCheckScreenType } from '../../../../hooks';

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
          <LimitsIcon />
          <LimitsText>4 из 5</LimitsText>
        </LimitsBody>
        <Progress width="100%" progress={80} />
        <ButtonStyled onClick={handleClick}>Улучшить тариф</ButtonStyled>
      </LimitsWrapper>
    </LimitsStyled>
  );
};
