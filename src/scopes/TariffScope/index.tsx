import { createContext, useContext, useEffect, useState } from 'react';
import { Generation, Tariff } from '../../types';
import { TariffService } from '../../api';
import { useToastsScope } from '../ToastScope';

type TariffScopeProps = {
  children: React.ReactNode;
};

type TariffContextType = {
  tariff: Tariff | null;
  isTariffLoading: boolean;
  purchaseTariff: (newPlan: Exclude<Tariff['plan'], 'trial'>) => Promise<void>;
  checkoutTariff: (newPlan: Exclude<Tariff['plan'], 'trial'>) => Promise<string | undefined | null>;
  isTariffPurchasing: boolean;
  isRequestingCheckout: boolean;
  decrementGeneration: (mode: Generation['mode']) => void;
  fetchTariff: () => void;
  declineSubscription: () => Promise<void>;
  isSubscriptionDeclining: boolean;
};

const TariffContext = createContext<TariffContextType>({
  tariff: null,
  isTariffLoading: true,
  purchaseTariff: async () => {},
  checkoutTariff: async () => '',
  isTariffPurchasing: false,
  isRequestingCheckout: false,
  decrementGeneration: () => {},
  fetchTariff: () => {},
  declineSubscription: async () => {},
  isSubscriptionDeclining: false,
});

export const useTariffScope = () => useContext(TariffContext);

export const TariffScope = ({ children }: TariffScopeProps) => {
  const { showToast } = useToastsScope();
  const [tariff, setTariff] = useState<Tariff | null>(null);
  const [isTariffLoading, setIsTariffLoading] = useState(true);
  const [isTariffPurchasing, setIsTariffPurchasing] = useState(false);
  const [isRequestingCheckout, setIsRequestingCheckout] = useState(false);
  const [isSubscriptionDeclining, setIsSubscriptionDeclining] = useState(false);

  useEffect(() => {
    fetchTariff();
  }, []);

  const fetchTariff = async () => {
    try {
      setIsTariffLoading(true);
      const { data: tariff } = await TariffService.getTariff();
      setTariff(tariff);
    } finally {
      setIsTariffLoading(false);
    }
  };

  const checkoutTariff = async (newPlan: Exclude<Tariff['plan'], 'trial'>) => {
    try {
      setIsRequestingCheckout(true);

      const { data: confirmationToken } = await TariffService.checkoutTariff(newPlan);

      return confirmationToken;
    } catch (e) {
      showToast('Произошла ошибка при покупке тарифа', 'failure');
    } finally {
      setIsRequestingCheckout(false);
    }
  };

  const purchaseTariff = async (newPlan: Exclude<Tariff['plan'], 'trial'>) => {
    try {
      setIsTariffPurchasing(true);

      const { data: tariff } = await TariffService.purchaseTariff(newPlan);
      setTariff(tariff);
    } catch (e) {
      showToast('Произошла ошибка при покупке тарифа', 'failure');
    } finally {
      setIsTariffPurchasing(false);
    }
  };

  const decrementGeneration = (mode: Generation['mode']) => {
    if (!tariff) return;

    const generationField = mode === 'create' ? 'creations' : 'edits';

    if (tariff[generationField] <= 0) return;

    const updatedTariff: Tariff = {
      ...tariff,
      [generationField]: tariff[generationField] - 1,
    };
    setTariff(updatedTariff);
  };

  const declineSubscription = async () => {
    try {
      if (!tariff) return;

      setIsSubscriptionDeclining(true);
      await TariffService.declineSubscription();

      const updatedTariff: Tariff = {
        ...tariff,
        paymentMethodId: null,
      };
      setTariff(updatedTariff);

      showToast('Подписка успешно отменена', 'success');
    } catch (e) {
      showToast('Произошла ошибка при отмене подписки. Попробуйте еще раз', 'failure');
    } finally {
      setIsSubscriptionDeclining(false);
    }
  };

  return (
    <TariffContext.Provider
      value={{
        tariff,
        fetchTariff,
        isTariffLoading,
        purchaseTariff,
        checkoutTariff,
        isTariffPurchasing,
        isRequestingCheckout,
        decrementGeneration,
        declineSubscription,
        isSubscriptionDeclining,
      }}
    >
      {children}
    </TariffContext.Provider>
  );
};
