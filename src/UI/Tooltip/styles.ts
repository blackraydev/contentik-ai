import styled, { css } from 'styled-components';
import { TooltipPositionType } from '.';

type TooltipStyleProps = {
  $position?: TooltipPositionType;
  $offsetVertical?: number;
  $offsetHorizontal?: number;
  $width?: number;
  $animationActive: boolean;
};

export const TooltipWrapper = styled.div`
  display: flex;
  position: relative;
`;

export const TooltipStyled = styled.div<TooltipStyleProps>`
  transition: 0.2s ease;
  position: absolute;
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  left: 50%;
  transform: ${({ $offsetHorizontal = 50 }) => `translateX(-${$offsetHorizontal}%)`};
  padding: 8px;
  color: ${({ theme }) => theme.colors.primaryFont};
  background: ${({ theme }) => theme.colors.primaryBg};
  font-size: 14px;
  line-height: 1;
  z-index: 1001;
  box-shadow: ${({ theme }) => theme.colors.primaryBoxShadow};
  width: ${({ $width }) => `${$width}px`};
  text-align: center;

  ${({ $animationActive }) =>
    $animationActive
      ? css`
          animation: tooltipFadeIn 0.15s ease;
        `
      : css`
          animation: tooltipFadeOut 0.15s ease;
        `}

  @keyframes tooltipFadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes tooltipFadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  ${({ $position, $offsetVertical }) => {
    return (
      ($position === 'top' &&
        css`
          top: -${$offsetVertical}px;
        `) ||
      ($position === 'bottom' &&
        css`
          bottom: -${$offsetVertical}px;
        `)
    );
  }}
`;
