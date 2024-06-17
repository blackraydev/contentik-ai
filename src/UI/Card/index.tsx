import { ReactNode } from 'react';
import { CardStyled, ChildrenStyled } from './styled';

type CardProps = {
  width: string;
  height: string;
  children: ReactNode;
};

export const Card = ({ width, height, children }: CardProps) => {
  return (
    <CardStyled>
      <ChildrenStyled $width={width} $height={height}>
        {children}
      </ChildrenStyled>
    </CardStyled>
  );
};
