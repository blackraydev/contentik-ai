import { InputHTMLAttributes, forwardRef } from 'react';
import { ErrorText, InfoIcon, InputStyled, Label, LabelWrapper, LeftPart, Wrapper } from './styled';
import { Tooltip, TooltipProps } from '../Tooltip';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: {
    visible?: boolean;
    text?: string;
  };
  tooltipProps?: Omit<TooltipProps, 'children'>;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, tooltipProps, ...props }, ref) => {
    return (
      <Wrapper>
        {(label || error) && (
          <LabelWrapper>
            <LeftPart>
              {label && <Label>{label}</Label>}
              {tooltipProps?.content && (
                <Tooltip {...tooltipProps} offsetVertical={50}>
                  <InfoIcon />
                </Tooltip>
              )}
            </LeftPart>
            {error?.visible && <ErrorText>{error.text || 'Обязательное поле'}</ErrorText>}
          </LabelWrapper>
        )}
        <InputStyled $invalid={error?.visible} ref={ref} {...props} />
      </Wrapper>
    );
  },
);
