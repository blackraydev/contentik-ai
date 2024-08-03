export const getUserAgent = () => {
  return (navigator.userAgent ?? window.navigator.userAgent ?? '').substring(0, 100);
};
