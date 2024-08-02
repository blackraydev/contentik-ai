import { InputHTMLAttributes, forwardRef } from 'react';
import { useCheckScreenType } from '../../hooks';
import { Tooltip, TooltipProps } from '../Tooltip';
import {
  ErrorText,
  ExceedingText,
  InfoIcon,
  InputStyled,
  Label,
  LabelWrapper,
  LeftPart,
  Wrapper,
} from './styled';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: {
    visible?: boolean;
    text?: string;
  };
  tooltipProps?: Omit<TooltipProps, 'children'>;
  maxLength?: number;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, tooltipProps, value, maxLength, ...props }, ref) => {
    const { isMobile } = useCheckScreenType();

    const currentLength = value?.toString().length ?? 0;
    const lengthExceeding = maxLength ? maxLength - currentLength < 50 : false;

    return (
      <Wrapper $isMobile={isMobile} data-error={error?.visible && 'error'}>
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
            {lengthExceeding && (
              <ExceedingText>
                {currentLength} / {maxLength}
              </ExceedingText>
            )}
            {error?.visible && <ErrorText>{error.text || 'Обязательное поле'}</ErrorText>}
          </LabelWrapper>
        )}
        <InputStyled
          $invalid={error?.visible}
          ref={ref}
          value={value}
          maxLength={maxLength}
          {...props}
        />
      </Wrapper>
    );
  },
);
