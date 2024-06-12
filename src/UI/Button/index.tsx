import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ButtonStyled } from './styled';
import { Loader } from '../Loader';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
  tooltipContent?: ReactNode;
  children: ReactNode;
};

export const Button = ({
  children,
  disabled,
  isLoading,
  tooltipContent,
  ...props
}: ButtonProps) => {
  return (
    <ButtonStyled disabled={disabled || isLoading} {...props}>
      {isLoading ? <Loader /> : children}
    </ButtonStyled>
  );
};
