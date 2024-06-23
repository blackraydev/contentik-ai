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
  onSubmit: () => Promise<void>;
  onClose: () => void;
  isSubmitting: boolean;
};

export const Modal = ({ onSubmit, onClose, isSubmitting }: ModalProps) => {
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
        <ModalTitle>Вы абсолютно уверены?</ModalTitle>
        <ModalDescription>
          После подтверждения данные будут безвозвратно удалены и восстановить их не получится
        </ModalDescription>
        <FooterWrapper>
          <SubmitButton isLoading={isSubmitting} onClick={handleSubmit}>
            Подтвердить
          </SubmitButton>
          <DeclineButton onClick={handleClose}>Отменить</DeclineButton>
        </FooterWrapper>
      </ModalStyled>
    </Overlay>
  );
};
