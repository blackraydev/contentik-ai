import { Fragment, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useCheckScreenType } from '../../hooks';
import { Limits } from './components';
import { getActiveTabRoute } from './utils';
import { tabRoutes } from './consts';
import {
  BottomPart,
  BurgerMenuIcon,
  Logo,
  LogoText,
  LogoWrapper,
  NavBarMobileDrawer,
  NavBarMobileStyled,
  NavBarStyled,
  NavLink,
  NavLinkMobile,
  NavbarOverlay,
  Navigation,
  NavigationMobile,
  TopPart,
  TopPartMobile,
} from './styled';

export const NavBar = () => {
  const [open, setOpen] = useState(false);
  const { isMobile, isTablet } = useCheckScreenType();
  const { pathname } = useLocation();
  const [activeTabRoute, setActiveTabRoute] = useState(getActiveTabRoute(pathname));

  useEffect(() => {
    const newActiveTabRoute = getActiveTabRoute(pathname);
    setActiveTabRoute(newActiveTabRoute);
  }, [pathname]);

  if (isMobile || isTablet) {
    return (
      <Fragment>
        <NavBarMobileStyled>
          <TopPartMobile>
            <BurgerMenuIcon onClick={() => setOpen((prevOpen) => !prevOpen)} />
            <NavigationMobile>
              {tabRoutes.map((route) => (
                <NavLinkMobile
                  key={route.path}
                  to={route.path}
                  onClick={() => setActiveTabRoute(route.path)}
                  $active={activeTabRoute === route.path}
                >
                  {route.icon}
                </NavLinkMobile>
              ))}
            </NavigationMobile>
          </TopPartMobile>
          <Limits />
        </NavBarMobileStyled>
        {open && (
          <NavbarOverlay onClick={() => setOpen(false)} $isMobileOpen={open}>
            <NavBarMobileDrawer $isMobileOpen={true} onClick={(e) => e.stopPropagation()}>
              <TopPart>
                <LogoWrapper>
                  <Logo src="/contentik-ai/logo.png" />
                  <LogoText>Contentik</LogoText>
                </LogoWrapper>
                <Navigation>
                  {tabRoutes.map((route) => (
                    <NavLink
                      key={route.path}
                      to={route.path}
                      onClick={() => {
                        setActiveTabRoute(route.path);
                        setOpen(false);
                      }}
                      $active={activeTabRoute === route.path}
                    >
                      {route.icon}
                      {route.title}
                    </NavLink>
                  ))}
                </Navigation>
              </TopPart>
              <BottomPart>
                <Limits isMobileOpen={open} setOpen={setOpen} />
              </BottomPart>
            </NavBarMobileDrawer>
          </NavbarOverlay>
        )}
      </Fragment>
    );
  }

  return (
    <NavBarStyled>
      <TopPart>
        <LogoWrapper>
          <Logo src="/contentik-ai/logo.png" />
          <LogoText>Contentik</LogoText>
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
