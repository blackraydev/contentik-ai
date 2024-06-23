import { RouteProps } from 'react-router-dom';
import { PrivateRoutes, PublicRoutes } from '../../../consts';
import {
  CreatePage,
  AuthPage,
  HistoryPage,
  OptimizationPage,
  TariffsPage,
  TonalityPage,
  EditPage,
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
    path: PrivateRoutes.Optimization,
    element: <OptimizationPage />,
  },
  {
    path: PrivateRoutes.Tonality,
    element: <TonalityPage />,
  },
  {
    path: PrivateRoutes.History,
    element: <HistoryPage />,
  },
  {
    path: PrivateRoutes.Tariffs,
    element: <TariffsPage />,
  },
];

export const publicRoutes: RouteProps[] = [
  {
    path: PublicRoutes.Auth,
    element: <AuthPage />,
  },
];
