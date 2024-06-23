import { TextareaHTMLAttributes, forwardRef } from 'react';
import {
  ErrorText,
  InfoIcon,
  Label,
  LabelWrapper,
  LeftPart,
  TextareaStyled,
  TextareaWrapper,
} from './styles';
import { Tooltip, TooltipProps } from '../Tooltip';

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  error?: {
    visible?: boolean;
    text?: string;
  };
  tooltipProps?: Omit<TooltipProps, 'children'>;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, tooltipProps, ...props }, ref) => {
    return (
      <TextareaWrapper>
        <LabelWrapper>
          <LeftPart>
            <Label>{label}</Label>
            {tooltipProps?.content && (
              <Tooltip {...tooltipProps} offsetVertical={50}>
                <InfoIcon />
              </Tooltip>
            )}
          </LeftPart>
          {error?.visible && <ErrorText>{error.text || 'Обязательное поле'}</ErrorText>}
        </LabelWrapper>
        <TextareaStyled $invalid={error?.visible} ref={ref} {...props} />
      </TextareaWrapper>
    );
  },
);
