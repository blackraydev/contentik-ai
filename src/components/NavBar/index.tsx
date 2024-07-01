import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Limits } from './components';
import { getActiveTabRoute } from './utils';
import { tabRoutes } from './consts';
import {
  BottomPart,
  Logo,
  LogoText,
  LogoWrapper,
  NavBarStyled,
  NavLink,
  Navigation,
  TopPart,
} from './styled';

export const NavBar = () => {
  const { pathname } = useLocation();
  const [activeTabRoute, setActiveTabRoute] = useState(getActiveTabRoute(pathname));

  useEffect(() => {
    const newActiveTabRoute = getActiveTabRoute(pathname);
    setActiveTabRoute(newActiveTabRoute);
  }, [pathname]);

  return (
    <NavBarStyled>
      <TopPart>
        <LogoWrapper>
          <Logo src="logo.png" alt="logo" />
          <LogoText>ontentik</LogoText>
        </LogoWrapper>
        <Navigation>
          {tabRoutes.map((route) => (
            <NavLink
              key={route.path}
              to={route.path}
              onClick={() => setActiveTabRoute(route.path)}
              $active={activeTabRoute === route.path}
            >
              {route.icon}
              {route.title}
            </NavLink>
          ))}
        </Navigation>
      </TopPart>
      <BottomPart>
        <Limits />
      </BottomPart>
    </NavBarStyled>
  );
};
