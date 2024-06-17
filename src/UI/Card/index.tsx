import { ReactNode } from 'react';
import { CardStyled, ChildrenStyled } from './styled';
import { Tabs, TabsProps } from '../Tabs';

type CardProps = {
  width: string;
  tabsProps: TabsProps;
  children: ReactNode;
};

export const Card = ({ width, tabsProps, children }: CardProps) => {
  return (
    <CardStyled $width={width}>
      <Tabs {...tabsProps} />
      <ChildrenStyled>{children}</ChildrenStyled>
    </CardStyled>
  );
};
