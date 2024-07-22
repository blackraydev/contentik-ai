import { HistoryIcon, MagicIcon, PenIcon } from '../styled';

export const tabRoutes = [
  {
    title: 'Создание',
    path: '/create',
    icon: <MagicIcon />,
  },
  {
    title: 'Редактирование',
    path: '/edit',
    icon: <PenIcon />,
  },
  {
    title: 'История',
    path: '/history',
    icon: <HistoryIcon />,
  },
];
