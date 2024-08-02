import { TextareaHTMLAttributes, forwardRef } from 'react';
import {
  ErrorText,
  ExceedingText,
  InfoIcon,
  Label,
  LabelWrapper,
  LeftPart,
  TextareaStyled,
  TextareaWrapper,
} from './styles';
import { Tooltip, TooltipProps } from '../Tooltip';
import { useCheckScreenType } from '../../hooks';

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  error?: {
    visible?: boolean;
    text?: string;
  };
  tooltipProps?: Omit<TooltipProps, 'children'>;
  maxLength?: number;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, tooltipProps, value, maxLength, ...props }, ref) => {
    const { isMobile } = useCheckScreenType();

    const currentLength = value?.toString().length ?? 0;
    const lengthExceeding = maxLength ? maxLength - currentLength < 50 : false;

    return (
      <TextareaWrapper $isMobile={isMobile} data-error={error?.visible && 'error'}>
        <LabelWrapper>
          <LeftPart>
            <Label>{label}</Label>
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
        <TextareaStyled
          $invalid={error?.visible}
          ref={ref}
          value={value}
          maxLength={maxLength}
          {...props}
        />
      </TextareaWrapper>
    );
  },
);
