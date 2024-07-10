import styled from 'styled-components';
import { IoIosCheckmarkCircle, IoMdCloseCircle } from 'react-icons/io';
import { RiErrorWarningFill } from 'react-icons/ri';
import { IoClose } from 'react-icons/io5';

export const ToastStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.2s ease;
  background: ${({ theme }) => theme.colors.primaryBg};
  padding: 20px;
  border-radius: 15px;
  position: relative;
  color: ${({ theme }) => theme.colors.primaryFont};
  opacity: 0.99;
  box-shadow: 0px;
  animation: toast-in-left 0.2s ease;

  &:hover {
    opacity: 1;
    box-shadow: ${({ theme }) => theme.colors.primaryBoxShadow};
  }

  & + & {
    margin-top: 10px;
  }

  @keyframes toast-in-left {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0%);
    }
  }
`;

export const ToastMessage = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const ToastButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  line-height: 1;
  background: none;
  border: none;
  cursor: pointer;
  color: inherit;
  opacity: 0.75;
`;

export const SuccessIcon = styled(IoIosCheckmarkCircle)`
  width: 20px;
  height: 20px;
  color: rgb(109, 202, 135);
`;

export const FailureIcon = styled(IoMdCloseCircle)`
  width: 20px;
  height: 20px;
  color: rgb(183, 80, 34);
`;

export const WarningIcon = styled(RiErrorWarningFill)`
  width: 20px;
  height: 20px;
  color: yellow;
`;

export const GenerationDeleteIcon = styled(IoClose)`
  transition: 0.2s ease;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.secondaryFont};
  width: 24px;
  height: 24px;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryFont};
  }
`;

export const Message = styled.p``;
