import { useState } from 'react';
import { GenerationDeleteIcon, ModalStyled, Overlay } from './styled';

type PaymentModalProps = {
  onClose: () => void;
};

export const PaymentModal = ({ onClose }: PaymentModalProps) => {
  const [animationActive, setAnimationActive] = useState(true);

  const handleClose = () => {
    setAnimationActive(false);
    setTimeout(() => onClose(), 100);
  };

  return (
    <Overlay $animationActive={animationActive} onClick={handleClose}>
      <ModalStyled
        onClick={(e) => e.stopPropagation()}
        $animationActive={animationActive}
        id="payment-form"
      >
        <GenerationDeleteIcon onClick={handleClose} />
      </ModalStyled>
    </Overlay>
  );
};
