import { InputHTMLAttributes, forwardRef } from 'react';
import { ErrorText, InfoIcon, InputStyled, Label, LabelWrapper, LeftPart, Wrapper } from './styled';
import { Tooltip, TooltipProps } from '../Tooltip';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  invalid?: boolean;
  tooltipProps: Omit<TooltipProps, 'children'>;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, invalid, tooltipProps, ...props }, ref) => {
    return (
      <Wrapper>
        <LabelWrapper>
          <LeftPart>
            <Label>{label}</Label>
            {tooltipProps?.content && (
              <Tooltip {...tooltipProps}>
                <InfoIcon />
              </Tooltip>
            )}
          </LeftPart>
          {invalid && <ErrorText>Обязательное поле</ErrorText>}
        </LabelWrapper>
        <InputStyled $invalid={invalid} ref={ref} {...props} />
      </Wrapper>
    );
  },
);
