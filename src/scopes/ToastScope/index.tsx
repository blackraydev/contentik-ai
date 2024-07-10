import { createContext, useContext, useState } from 'react';
import { Toasts } from '../../UI';
import { Toast } from '../../UI/Toasts/types';

type ToastsScopeProps = {
  children: React.ReactNode;
};

type ToastsContextType = {
  toasts: Toast[];
  showToast: (message: string, type: Toast['type']) => void;
  removeToast: (id: number) => void;
  removeAllToasts: () => void;
};

const ToastsContext = createContext<ToastsContextType>({
  toasts: [],
  showToast: () => {},
  removeToast: () => {},
  removeAllToasts: () => {},
});

export const useToastsScope = () => useContext(ToastsContext);

export const ToastsScope = ({ children }: ToastsScopeProps) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = (message: string, type: Toast['type']) => {
    const toast = {
      id: Date.now(),
      message,
      type,
    };

    setToasts((prevToasts) => [...prevToasts, toast]);

    setTimeout(() => {
      removeToast(toast.id);
    }, 5 * 1000);
  };

  const removeToast = (id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  const removeAllToasts = () => {
    setToasts([]);
  };

  return (
    <ToastsContext.Provider
      value={{
        toasts,
        showToast,
        removeToast,
        removeAllToasts,
      }}
    >
      <Toasts data={toasts} removeToast={removeToast} />
      {children}
    </ToastsContext.Provider>
  );
};
