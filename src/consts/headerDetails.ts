import { PrivateRoutes } from './routes';

export const HeaderDetails = {
  [PrivateRoutes.Create]: {
    title: 'Создание',
    description: 'Создайте контент, который увлечет ваших читателей',
  },
  [PrivateRoutes.Edit]: {
    title: 'Редактирование',
    description: 'Редактируйте контент, созданный вами',
  },
  [PrivateRoutes.History]: {
    title: 'История',
    description: 'Просмотрите историю своих генераций',
  },
  [PrivateRoutes.Tariffs]: {
    title: 'Тарифы',
    description: 'Выберите тариф, который соответствует вашим потребностям',
  },
  [PrivateRoutes.Profile]: {
    title: 'Профиль',
    description: 'Просмотр данных вашего профиля',
  },
};
