import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ButtonStyled } from './styled';
import { Loader } from '../Loader';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
  children: ReactNode;
};

export const Button = ({ children, disabled, isLoading, ...props }: ButtonProps) => {
  return (
    <ButtonStyled disabled={disabled || isLoading} {...props}>
      {isLoading ? <Loader /> : children}
    </ButtonStyled>
  );
};
