import { PrivateRoutes } from './routes';

export const HeaderDetails = {
  [PrivateRoutes.App]: {
    title: 'Генерация',
    description: 'Создайте контент, который увлечет ваших читателей',
  },
  [PrivateRoutes.History]: {
    title: 'История',
    description: 'Просмотрите историю своих генераций',
  },
  [PrivateRoutes.Tariffs]: {
    title: 'Тарифы',
    description: 'Выберите тариф, который соответствует вашим потребностям',
  },
  [PrivateRoutes.Optimization]: {
    title: 'Оптимизация',
    description: 'Анализ текста на предмет SEO-оптимизации',
  },
  [PrivateRoutes.Tonality]: {
    title: 'Анализ тональности',
    description: 'Определение эмоциональной окраски текста',
  },
};
