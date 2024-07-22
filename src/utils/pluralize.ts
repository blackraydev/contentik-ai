export const pluralize = (number: number, declension: string[]) => {
  if (declension.length !== 3) {
    throw new Error('Необходимо указать три склонения существительного');
  }

  const [one, two, five] = declension;
  // Последние две цифры
  let n = number % 100;

  if (n >= 5 && n <= 20) {
    return five;
  }

  // Последняя цифра
  n %= 10;

  if (n === 1) {
    return one;
  }

  if (n >= 2 && n <= 4) {
    return two;
  }

  return five;
};
