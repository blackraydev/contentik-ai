import { ReactNode } from 'react';
import { Header } from '../Header';
import { NavBar } from '../NavBar';
import { LayoutChildrenStyled, LayoutMainStyled, LayoutStyled } from './styled';
import { useCheckScreenType } from '../../hooks';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const { isMobile, isTablet } = useCheckScreenType();

  return (
    <LayoutStyled $isMobile={isMobile} $isTablet={isTablet}>
      {!isMobile && <NavBar />}
      <LayoutMainStyled>
        <Header />
        <LayoutChildrenStyled>{children}</LayoutChildrenStyled>
      </LayoutMainStyled>
    </LayoutStyled>
  );
};
