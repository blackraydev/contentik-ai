import { useEffect, useRef } from 'react';
import { Toast } from './components';
import { ToastsStyled } from './styled';
import type { Toast as ToastType } from './types';

type ToastsProps = {
  data: ToastType[];
  removeToast: (id: number) => void;
};

export const Toasts = ({ data, removeToast }: ToastsProps) => {
  const listRef = useRef<HTMLDivElement | null>(null);

  const handleScrolling = (el: HTMLDivElement) => {
    el?.scrollTo(0, 0);
  };

  useEffect(() => {
    if (listRef.current) {
      handleScrolling(listRef.current);
    }
  }, [data]);

  return (
    data.length > 0 && (
      <ToastsStyled ref={listRef}>
        {data.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </ToastsStyled>
    )
  );
};
