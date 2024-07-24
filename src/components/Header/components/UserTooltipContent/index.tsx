import { useNavigate } from 'react-router-dom';
import { useUserScope } from '../../../../scopes';
import { PrivateRoutes } from '../../../../consts';
import {
  CardIcon,
  LogoutIcon,
  MailIcon,
  Option,
  OptionLink,
  OptionText,
  Separator,
  TelegramIcon,
  TooltipContentStyled,
  UserIcon,
} from './styled';

export const UserTooltipContent = () => {
  const navigate = useNavigate();
  const { logout } = useUserScope();

  const handleLogout = async () => {
    await logout();
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

      <OptionLink target="_blank" rel="noreferrer noopener" href="https://t.me/contentik_ai_chat">
        <TelegramIcon />
        <OptionText>Чат</OptionText>
      </OptionLink>
      <OptionLink href="mailto:support@contentik-ai.ru?subject=Вопрос">
        <MailIcon />
        <OptionText>Поддержка</OptionText>
      </OptionLink>
      <Separator />

      <Option onClick={handleLogout}>
        <LogoutIcon />
        <OptionText>Выход</OptionText>
      </Option>
    </TooltipContentStyled>
  );
};
