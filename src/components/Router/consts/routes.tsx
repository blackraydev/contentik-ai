import { RouteProps } from 'react-router-dom';
import { PrivateRoutes, PublicRoutes } from '../../../consts';
import {
  CreatePage,
  AuthPage,
  HistoryPage,
  TariffsPage,
  EditPage,
  ProfilePage,
  ResetPage,
} from '../../../pages';

export const privateRoutes: RouteProps[] = [
  {
    path: PrivateRoutes.Create,
    element: <CreatePage />,
  },
  {
    path: PrivateRoutes.Edit,
    element: <EditPage />,
  },
  {
    path: PrivateRoutes.History,
    element: <HistoryPage />,
  },
  {
    path: PrivateRoutes.Tariffs,
    element: <TariffsPage />,
  },
  {
    path: PrivateRoutes.Profile,
    element: <ProfilePage />,
  },
];

export const publicRoutes: RouteProps[] = [
  {
    path: PublicRoutes.Auth,
    element: <AuthPage />,
  },
  {
    path: PublicRoutes.Reset,
    element: <ResetPage />,
  },
];
