import { ReactNode, useMemo, useRef, useState } from 'react';
import { TooltipStyled, TooltipWrapper } from './styles';

export type TooltipPositionType = 'top' | 'bottom';

export type TooltipProps = {
  width: number;
  content?: ReactNode;
  delay?: number;
  className?: string;
  position?: TooltipPositionType;
  offsetVertical?: number;
  offsetHorizontal?: number;
  type?: 'hover' | 'click';
  children: ReactNode;
};

export const Tooltip = ({
  delay = 200,
  position = 'top',
  className,
  content,
  children,
  offsetVertical = 40,
  offsetHorizontal,
  width,
  type = 'hover',
}: TooltipProps) => {
  const [active, setActive] = useState(false);
  const [animationActive, setAnimationActive] = useState(false);
  const timeoutRef = useRef<number>();
  const tooltipRef = useRef<HTMLDivElement>(null);

  const showTooltip = () => {
    if (type === 'click') {
      if (active) {
        tooltipRef.current?.blur();
        setAnimationActive(false);
        return setTimeout(() => setActive(false), 150);
      }

      tooltipRef.current?.focus();
      setAnimationActive(true);
      return setActive(true);
    }

    timeoutRef.current = window.setTimeout(() => {
      setAnimationActive(true);
      setActive(true);
    }, delay);
  };

  const hideTooltip = () => {
    if (type === 'hover') {
      clearTimeout(timeoutRef.current);
    }

    setAnimationActive(false);
    setTimeout(() => setActive(false), 150);
  };

  const handlers = useMemo(() => {
    if (type === 'click') {
      return {
        onClick: showTooltip,
        onBlur: hideTooltip,
      };
    }

    return {
      onMouseEnter: showTooltip,
      onMouseLeave: hideTooltip,
    };
  }, [type, showTooltip, hideTooltip]);

  return (
    <TooltipWrapper tabIndex={0} ref={tooltipRef} className={className} {...handlers}>
      {active && (
        <TooltipStyled
          $width={width}
          $position={position}
          $offsetVertical={offsetVertical}
          $offsetHorizontal={offsetHorizontal}
          $animationActive={animationActive}
        >
          {content}
        </TooltipStyled>
      )}
      {children}
    </TooltipWrapper>
  );
};
