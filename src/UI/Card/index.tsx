import { ReactNode } from 'react';
import { CardStyled, ChildrenStyled } from './styled';

type CardProps = {
  width: string;
  height: string;
  padding?: string;
  children: ReactNode;
};

export const Card = ({ width, height, padding, children }: CardProps) => {
  return (
    <CardStyled $padding={padding}>
      <ChildrenStyled $width={width} $height={height}>
        {children}
      </ChildrenStyled>
    </CardStyled>
  );
};
