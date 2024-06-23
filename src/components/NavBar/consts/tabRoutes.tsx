import { HistoryIcon, MagicIcon, PenIcon, SeoIcon, ToneIcon } from '../styled';

export const generationTabRoutes = [
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
];

export const analysisTabRoutes = [
  {
    title: 'Оптимизация',
    path: '/app/optimization',
    icon: <SeoIcon />,
  },
  {
    title: 'Тональность',
    path: '/app/tonality',
    icon: <ToneIcon />,
  },
];
