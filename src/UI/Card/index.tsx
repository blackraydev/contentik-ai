import { ReactNode } from 'react';
import { CardStyled, ChildrenStyled } from './styled';

type CardProps = {
  width: string;
  height: string;
  maxHeight?: string;
  padding?: string;
  children: ReactNode;
};

export const Card = ({ width, height, maxHeight, padding, children }: CardProps) => {
  return (
    <CardStyled $padding={padding}>
      <ChildrenStyled $width={width} $height={height} $maxHeight={maxHeight}>
        {children}
      </ChildrenStyled>
    </CardStyled>
  );
};
