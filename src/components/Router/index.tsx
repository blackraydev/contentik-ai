import { Route, Routes, Navigate, RouteProps } from 'react-router-dom';
import { useUserScope } from '../../scopes';
import { privateRoutes, publicRoutes } from './consts';
import { PrivateRoutes, PublicRoutes } from '../../consts';
import { Layout as PrivatePageLayout } from '../../components';
import { AuthLoader, Layout } from './styled';
import { isUserEmailVerified } from '../../utils';

export const Router = () => {
  const { isAuthenticating, session, user } = useUserScope();
  const isAuthenticationInvalid = (!session && !user) || !isUserEmailVerified(user);

  const renderSingleRoute = (routeProps: RouteProps) => {
    return <Route {...routeProps} key={routeProps.path} />;
  };

  const renderRoutes = () => {
    if (isAuthenticationInvalid) {
      return (
        <Routes>
          {publicRoutes.map(renderSingleRoute)}
          <Route path="*" element={renderRedirect()} />
        </Routes>
      );
    }

    return (
      <PrivatePageLayout>
        <Routes>
          {privateRoutes.map(renderSingleRoute)}
          <Route path="*" element={renderRedirect()} />
        </Routes>
      </PrivatePageLayout>
    );
  };

  const renderRedirect = () => {
    if (isAuthenticationInvalid) {
      return <Navigate to={PublicRoutes.Auth} />;
    }

    return <Navigate to={PrivateRoutes.Create} />;
  };

  if (isAuthenticating) {
    return (
      <Layout>
        <AuthLoader />
      </Layout>
    );
  }

  return renderRoutes();
};
