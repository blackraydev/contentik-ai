import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Limits } from './components';
import { getActiveTabRoute } from './utils';
import { analysisTabRoutes, generationTabRoutes } from './consts';
import {
  BottomPart,
  Logo,
  LogoText,
  LogoWrapper,
  NavBarStyled,
  NavLink,
  Navigation,
  Section,
  SectionTitle,
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
        <Section>
          <SectionTitle>Генерация</SectionTitle>
          <Navigation>
            {generationTabRoutes.map((route) => (
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
        </Section>
        <Section>
          <SectionTitle>Анализ</SectionTitle>
          <Navigation>
            {analysisTabRoutes.map((route) => (
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
        </Section>
      </TopPart>
      <BottomPart>
        <Limits />
      </BottomPart>
    </NavBarStyled>
  );
};
