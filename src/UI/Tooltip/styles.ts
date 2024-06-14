import styled, { css } from 'styled-components';
import { TooltipPositionType } from '.';

type TooltipStyleProps = {
  position: TooltipPositionType;
  offset: number;
};

export const TooltipWrapper = styled.div`
  display: flex;
  position: relative;
`;

export const TooltipStyled = styled.div<TooltipStyleProps>`
  transition: 0.2s ease;
  position: absolute;
  border-radius: 8px;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px;
  color: ${({ theme }) => theme.colors.primaryText};
  background: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  line-height: 1;
  z-index: 1001;
  box-shadow: 0px 0px 5px 1px ${({ theme }) => theme.colors.main};
  width: 230px;
  text-align: center;

  &::before {
    transition: 0.2s ease;
    content: '';
    left: 50%;
    border: 6px solid transparent;
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    margin-left: -6px;
  }

  ${({ position, offset }) => {
    return (
      (position === 'top' &&
        css`
          top: -${offset}px;

          &::before {
            top: 100%;
            border-top-color: ${({ theme }) => theme.colors.primary};
          }
        `) ||
      (position === 'bottom' &&
        css`
          bottom: -${offset}px;

          &::before {
            bottom: 100%;
            border-bottom-color: ${({ theme }) => theme.colors.primary};
          }
        `)
    );
  }}
`;
