import {
  FailureIcon,
  GenerationDeleteIcon,
  Message,
  SuccessIcon,
  ToastMessage,
  ToastStyled,
  WarningIcon,
} from './styled';

type ToastProps = {
  type: 'success' | 'failure' | 'warning';
  message: string;
  onClose: () => void;
};

const iconMap = {
  success: <SuccessIcon />,
  failure: <FailureIcon />,
  warning: <WarningIcon />,
};

export const Toast = ({ message, type, onClose }: ToastProps) => {
  const toastIcon = iconMap[type] || null;

  return (
    <ToastStyled role="alert">
      <ToastMessage>
        {toastIcon}
        <Message>{message}</Message>
      </ToastMessage>
      <GenerationDeleteIcon onClick={onClose} />
    </ToastStyled>
  );
};
