export const ERROR_SELECTOR = '[data-error="error"]';

export const scrollToFirstError = () => {
  setTimeout(() => {
    const errorMessageElement = document.querySelector(ERROR_SELECTOR);

    errorMessageElement?.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }, 10);
};
