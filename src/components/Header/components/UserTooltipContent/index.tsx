import { useNavigate } from 'react-router-dom';
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
  const { setIsAuthenticating, setUser, logout } = useUserScope();

  const handleLogout = async () => {
    setIsAuthenticating(true);
    logout();

    setUser(null);
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
