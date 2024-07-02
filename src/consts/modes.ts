import { Mode } from '../types';

export const modes: { value: Mode; label: string }[] = [
  {
    value: 'create',
    label: 'Создать',
  },
  {
    value: 'edit',
    label: 'Редактировать',
  },
];

export const historyModes: { value: Mode; label: string }[] = [
  {
    value: 'create',
    label: 'Создание',
  },
  {
    value: 'edit',
    label: 'Редактирование',
  },
];
