import { useNavigate } from 'react-router-dom';
import { Progress } from '../../../../UI';
import {
  ButtonStyled,
  LimitsBody,
  LimitsIcon,
  LimitsStyled,
  LimitsText,
  LimitsWrapper,
  TariffPlan,
  TariffTitle,
} from './styled';
import { PrivateRoutes } from '../../../../consts';

export const Limits = () => {
  const navigate = useNavigate();

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
        <ButtonStyled onClick={() => navigate(PrivateRoutes.Tariffs)}>Улучшить тариф</ButtonStyled>
      </LimitsWrapper>
    </LimitsStyled>
  );
};
