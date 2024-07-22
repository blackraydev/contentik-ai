import { Fragment, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useCheckScreenType } from '../../hooks';
import { Limits } from './components';
import { getActiveTabRoute } from './utils';
import { tabRoutes } from './consts';
import {
  BottomPart,
  BurgerMenuIcon,
  NavBarMobileDrawer,
  NavBarMobileStyled,
  NavBarStyled,
  NavLink,
  NavLinkMobile,
  NavbarOverlay,
  Navigation,
  NavigationMobile,
  StyledLogo,
  TopPart,
  TopPartMobile,
} from './styled';
import { Logo } from '../Logo';

export const NavBar = () => {
  const [open, setOpen] = useState(false);
  const { isTablet } = useCheckScreenType();
  const { pathname } = useLocation();
  const [activeTabRoute, setActiveTabRoute] = useState(getActiveTabRoute(pathname));

  useEffect(() => {
    const newActiveTabRoute = getActiveTabRoute(pathname);
    setActiveTabRoute(newActiveTabRoute);
  }, [pathname]);

  if (isTablet) {
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
                <StyledLogo />
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
        <Logo />
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
