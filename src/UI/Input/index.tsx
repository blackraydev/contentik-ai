import { InputHTMLAttributes, forwardRef } from 'react';
import { InputStyled, Label, Wrapper } from './styled';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(({ label, ...props }, ref) => {
  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      <InputStyled ref={ref} {...props} />
    </Wrapper>
  );
});
