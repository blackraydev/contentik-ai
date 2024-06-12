import { TextareaHTMLAttributes, forwardRef } from 'react';
import { Label, TextareaStyled, TextareaWrapper } from './styles';

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, ...props }, ref) => {
    return (
      <TextareaWrapper>
        {label && <Label>{label}</Label>}
        <TextareaStyled ref={ref} {...props} />
      </TextareaWrapper>
    );
  },
);
