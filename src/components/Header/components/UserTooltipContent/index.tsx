import { useNavigate } from 'react-router-dom';
import { signOut } from '../../../../api';
import { useUserScope } from '../../../../scopes';
import { PrivateRoutes } from '../../../../consts';
import {
  CardIcon,
  LogoutIcon,
  Option,
  OptionText,
  Separator,
  TooltipContentStyled,
  UserIcon,
} from './styled';

export const UserTooltipContent = () => {
  const navigate = useNavigate();
  const { setIsAuthenticating } = useUserScope();

  const handleLogout = async () => {
    setIsAuthenticating(true);
    await signOut();
    setIsAuthenticating(false);
  };

  return (
    <TooltipContentStyled>
      <Option onClick={() => navigate(PrivateRoutes.Profile)}>
        <UserIcon />
        <OptionText>Профиль</OptionText>
      </Option>
      <Option onClick={() => navigate(PrivateRoutes.Tariffs)}>
        <CardIcon />
        <OptionText>Тарифы</OptionText>
      </Option>
      <Separator />
      <Option onClick={handleLogout}>
        <LogoutIcon />
        <OptionText>Выход</OptionText>
      </Option>
    </TooltipContentStyled>
  );
};
