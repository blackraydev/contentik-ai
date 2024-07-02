import { Fragment, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HeaderDetails, PrivateRoutes } from '../../consts';
import { Tooltip } from '../../UI';
import { ThemeToggle } from '../ThemeToggle';
import { UserTooltipContent } from './components';
import {
  BurgerMenuIcon,
  Description,
  Details,
  HeaderStyled,
  IconsWrapper,
  Title,
  UserIcon,
} from './styled';
import { useCheckScreenType } from '../../hooks';
import {
  BottomPart,
  LogoText,
  LogoWrapper,
  NavBarStyled,
  NavLink,
  NavbarOverlay,
  Navigation,
  TopPart,
} from '../NavBar/styled';
import { Limits } from '../NavBar/components';
import { tabRoutes } from '../NavBar/consts';
import { getActiveTabRoute } from '../NavBar/utils';

export const Header = () => {
  const { isMobile } = useCheckScreenType();
  const { pathname } = useLocation();
  const [{ title, description }, setDetails] = useState(HeaderDetails[PrivateRoutes.Dashboard]);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [activeTabRoute, setActiveTabRoute] = useState(getActiveTabRoute(pathname));

  useEffect(() => {
    const targetRoute = Object.values(PrivateRoutes).find((route) => route === pathname);
    setDetails(HeaderDetails[targetRoute || PrivateRoutes.Dashboard]);
  }, [pathname]);

  const renderNavbar = () => {
    if (navbarOpen)
      return (
        <NavbarOverlay onClick={() => setNavbarOpen(false)} $isMobileOpen={navbarOpen}>
          <NavBarStyled $isMobileOpen={navbarOpen} onClick={(e) => e.stopPropagation()}>
            <TopPart>
              <LogoWrapper>
                <LogoText>Contentik</LogoText>
              </LogoWrapper>
              <Navigation>
                {tabRoutes.map((route) => (
                  <NavLink
                    key={route.path}
                    to={route.path}
                    onClick={() => {
                      setActiveTabRoute(route.path);
                      setNavbarOpen(false);
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
              <Limits isMobileOpen={navbarOpen} setOpen={setNavbarOpen} />
            </BottomPart>
          </NavBarStyled>
        </NavbarOverlay>
      );
  };

  return (
    <HeaderStyled>
      {renderNavbar()}
      <Details $isMobile={isMobile}>
        {isMobile ? (
          <Fragment>
            <BurgerMenuIcon onClick={() => setNavbarOpen((prevOpen) => !prevOpen)} />
            <Title>{title}</Title>
          </Fragment>
        ) : (
          <Fragment>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </Fragment>
        )}
      </Details>
      <IconsWrapper $isMobile={isMobile}>
        <ThemeToggle />
        <Tooltip
          content={<UserTooltipContent />}
          width={200}
          offsetVertical={170}
          offsetHorizontal={92}
          type="click"
          position="bottom"
        >
          <UserIcon $isMobile={isMobile} />
        </Tooltip>
      </IconsWrapper>
    </HeaderStyled>
  );
};
