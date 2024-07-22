import { useState } from 'react';
import {
  DeclineButton,
  FooterWrapper,
  ModalDescription,
  ModalStyled,
  ModalTitle,
  Overlay,
  SubmitButton,
} from './styled';

type ModalProps = {
  onSubmit: (() => Promise<void>) | (() => void);
  onClose: () => void;
  isSubmitting?: boolean;
  title: string;
  description: string;
  submitText: string;
  declineText: string;
};

export const Modal = ({
  onSubmit,
  onClose,
  isSubmitting = false,
  title,
  description,
  submitText,
  declineText,
}: ModalProps) => {
  const [animationActive, setAnimationActive] = useState(true);

  const handleSubmit = async () => {
    await onSubmit();

    setAnimationActive(false);
    setTimeout(() => onClose(), 100);
  };

  const handleClose = () => {
    setAnimationActive(false);
    setTimeout(() => onClose(), 100);
  };

  return (
    <Overlay onClick={handleClose} $animationActive={animationActive}>
      <ModalStyled onClick={(e) => e.stopPropagation()} $animationActive={animationActive}>
        <ModalTitle>{title}</ModalTitle>
        <ModalDescription>{description}</ModalDescription>
        <FooterWrapper>
          <SubmitButton isLoading={isSubmitting} onClick={handleSubmit}>
            {submitText}
          </SubmitButton>
          <DeclineButton onClick={handleClose}>{declineText}</DeclineButton>
        </FooterWrapper>
      </ModalStyled>
    </Overlay>
  );
};
