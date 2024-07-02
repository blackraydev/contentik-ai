import styled, { css } from 'styled-components';
import { Button } from '../Button';

export const Overlay = styled.div<{ $animationActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;

  ${({ $animationActive }) =>
    $animationActive
      ? css`
          animation: overlayFadeIn 0.15s ease;
        `
      : css`
          animation: overlayFadeOut 0.15s ease;
        `}

  @keyframes overlayFadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes overlayFadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

export const ModalStyled = styled.div<{ $animationActive: boolean }>`
  z-index: 1001;
  background: ${({ theme }) => theme.colors.primaryBg};
  border-radius: 15px;
  padding: 25px;
  width: 500px;
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  box-shadow: ${({ theme }) => theme.colors.primaryBoxShadow};
  margin: 15px;

  ${({ $animationActive }) =>
    $animationActive
      ? css`
          animation: modalFadeIn 0.15s ease;
        `
      : css`
          animation: modalFadeOut 0.15s ease;
        `}

  @keyframes modalFadeIn {
    from {
      transform: translateY(5px) scale(0.8);
      opacity: 0;
    }
    to {
      transform: translateY(0) scale(1);
      opacity: 1;
    }
  }

  @keyframes modalFadeOut {
    from {
      transform: translateY(0) scale(1);
      opacity: 1;
    }
    to {
      transform: translateY(5px) scale(0.8);
      opacity: 0;
    }
  }
`;

export const ModalTitle = styled.p`
  transition: 0.2s ease;
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primaryFont};
  margin-bottom: 10px;
`;

export const ModalDescription = styled.p`
  transition: 0.2s ease;
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.secondaryFont};
  line-height: 0.5cm;
  margin-bottom: 5px;
`;

export const FooterWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const SubmitButton = styled(Button)`
  width: 130px;
  height: 44px;
`;

export const DeclineButton = styled(Button)`
  transition: 0.2s ease;
  background: ${({ theme }) => theme.colors.buttonIcon};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  color: ${({ theme }) => theme.colors.primaryFont};
  height: 44px;

  &:hover {
    background: ${({ theme }) => theme.colors.secondaryBg};
  }
`;
