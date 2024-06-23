import { ReactNode } from 'react';
import { Header } from '../Header';
import { NavBar } from '../NavBar';
import { LayoutChildrenStyled, LayoutMainStyled, LayoutStyled } from './styled';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutStyled>
      <NavBar />
      <LayoutMainStyled>
        <Header />
        <LayoutChildrenStyled>{children}</LayoutChildrenStyled>
      </LayoutMainStyled>
    </LayoutStyled>
  );
};
