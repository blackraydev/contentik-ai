import { PrivateRoutes } from '../../../consts';

export const getActiveTabRoute = (path: string) => {
  return Object.values(PrivateRoutes).find((route) => route === path);
};
