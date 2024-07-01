import { HistoryIcon, MagicIcon, PenIcon } from '../styled';

export const tabRoutes = [
  {
    title: 'Создание',
    path: '/app/create',
    icon: <MagicIcon />,
  },
  {
    title: 'Редактирование',
    path: '/app/edit',
    icon: <PenIcon />,
  },
  {
    title: 'История',
    path: '/app/history',
    icon: <HistoryIcon />,
  },
];
