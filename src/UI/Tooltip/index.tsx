import { ReactNode, useRef, useState } from 'react';
import { TooltipStyled, TooltipWrapper } from './styles';

export type TooltipPositionType = 'top' | 'bottom';

type TooltipProps = {
  content?: ReactNode;
  delay?: number;
  className?: string;
  position?: TooltipPositionType;
  offset?: number;
  children: ReactNode;
};

export const Tooltip = ({
  delay = 200,
  position = 'top',
  className,
  content,
  children,
  offset = 40,
}: TooltipProps) => {
  const [active, setActive] = useState(false);
  const timeoutRef = useRef<number>();

  const showTooltip = () => {
    timeoutRef.current = window.setTimeout(() => {
      setActive(true);
    }, delay);
  };

  const hideTooltip = () => {
    clearTimeout(timeoutRef.current);
    setActive(false);
  };

  return (
    <TooltipWrapper className={className} onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
      {active && (
        <TooltipStyled position={position} offset={offset}>
          {content}
        </TooltipStyled>
      )}
      {children}
    </TooltipWrapper>
  );
};