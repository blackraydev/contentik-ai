import styled, { css } from 'styled-components';
import { TooltipPositionType } from '.';

type TooltipStyleProps = {
  $position: TooltipPositionType;
  $offset: number;
  $width: number;
};

export const TooltipWrapper = styled.div`
  display: flex;
  position: relative;
`;

export const TooltipStyled = styled.div<TooltipStyleProps>`
  transition: 0.2s ease;
  position: absolute;
  border-radius: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  left: 50%;
  transform: translateX(-50%);
  padding: 8px;
  color: ${({ theme }) => theme.colors.primaryFont};
  background: ${({ theme }) => theme.colors.primaryBg};
  font-size: 14px;
  line-height: 1;
  z-index: 1001;
  box-shadow: ${({ theme }) => theme.colors.primaryBoxShadow};
  width: ${({ $width }) => `${$width}px`};
  text-align: center;

  ${({ $position, $offset }) => {
    return (
      ($position === 'top' &&
        css`
          top: -${$offset}px;
        `) ||
      ($position === 'bottom' &&
        css`
          bottom: -${$offset}px;
        `)
    );
  }}
`;
