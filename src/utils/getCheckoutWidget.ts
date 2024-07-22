export const getCheckoutWidget = (
  confirmationToken: string | undefined | null,
  isDarkTheme: boolean,
) => {
  return new window.YooMoneyCheckoutWidget({
    confirmation_token: confirmationToken,
    customization: {
      colors: {
        background: isDarkTheme ? '#0a0a0c' : '#F6F7F9', // Цвет фона платежной формы
        control_primary: isDarkTheme ? '#FFFFFF' : '#000000', // Цвет кнопки Заплатить и других акцентных элементов
        control_primary_content: isDarkTheme ? '#000000' : '#FFFFFF', // Цвет текста кнопки Заплатить
        control_secondary: '#FFFFFF', // Цвет неакцентных элементов интерфейса
        border: isDarkTheme ? '#2c2c2e' : '#ECEDEF', // Цвет границ и разделителей
        text: isDarkTheme ? '#FFFFFF' : '#000000', // Цвет текста
      },
    },
    error_callback: function (error: any) {
      console.log(error);
    },
  });
};
