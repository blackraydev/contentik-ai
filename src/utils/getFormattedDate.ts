import { months } from '../consts';

export const getFormattedDate = (generationDate: string) => {
  const date = new Date(generationDate);

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  const currentYear = new Date().getFullYear();

  let result = `${day} ${months[monthIndex]}`;

  if (year !== currentYear) {
    result += `${year}`;
  }

  return result;
};
