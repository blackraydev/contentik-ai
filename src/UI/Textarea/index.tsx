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
  invalid?: boolean;
  tooltipProps: Omit<TooltipProps, 'children'>;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, invalid, tooltipProps, ...props }, ref) => {
    return (
      <TextareaWrapper>
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
        <TextareaStyled $invalid={invalid} ref={ref} {...props} />
      </TextareaWrapper>
    );
  },
);
