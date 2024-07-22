import { IoClose } from 'react-icons/io5';
import styled, { css } from 'styled-components';

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
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: 0.2s ease;
  z-index: 1001;
  background: ${({ theme }) => theme.colors.primaryBg};
  border-radius: 15px;
  padding: 25px;
  width: 500px;
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  box-shadow: ${({ theme }) => theme.colors.primaryBoxShadow};
  margin: 15px;
  min-height: 380px;
  height: fit-content;

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

export const GenerationDeleteIcon = styled(IoClose)`
  position: absolute;
  transition: 0.2s ease;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.secondaryFont};
  min-width: 24px;
  min-height: 24px;
  right: 15px;
  top: 15px;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryFont};
  }
`;
