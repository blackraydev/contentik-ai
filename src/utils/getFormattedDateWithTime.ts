import { months } from '../consts';

export const getFormattedDateWithTime = (generationDate: string) => {
  const date = new Date(generationDate);

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const currentYear = new Date().getFullYear();

  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
  const formattedHours = hours < 10 ? '0' + hours : hours;

  let result = `${day} ${months[monthIndex]}, ${formattedHours}:${formattedMinutes}`;

  if (year !== currentYear) {
    result += `${year}`;
  }

  return result;
};
