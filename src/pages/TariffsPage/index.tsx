import { useEffect, useRef, useState } from 'react';
import { Modal } from '../../UI';
import { useCheckScreenType } from '../../hooks';
import { useTariffScope, useThemeScope, useToastsScope } from '../../scopes';
import { Tariff } from '../../types';
import { PaymentModal, Tariffs } from '../../components';
import { getCheckoutWidget } from '../../utils';
import { Wrapper } from './styled';

export const TariffsPage = () => {
  const { showToast } = useToastsScope();
  const { isDarkTheme } = useThemeScope();
  const { isMobile } = useCheckScreenType();
  const { tariff, checkoutTariff, purchaseTariff, isRequestingCheckout } = useTariffScope();
  const [isSubmitPaymentModalOpen, setIsSubmitPaymentModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [chosenPlan, setChosenPlan] = useState<Exclude<Tariff['plan'], 'trial'>>('start');
  const confirmationTokenRef = useRef<string | undefined | null>(null);

  useEffect(() => {
    if (isPaymentModalOpen && window.YooMoneyCheckoutWidget) {
      const checkout = getCheckoutWidget(confirmationTokenRef.current, isDarkTheme);

      checkout.on('fail', () => {
        showToast('Произошла ошибка при попытке оплатить тариф', 'success');
        setIsPaymentModalOpen(false);

        checkout.destroy();
      });

      checkout.on('success', async () => {
        await purchaseTariff(chosenPlan);

        showToast('Оплата прошла успешно', 'success');
        setIsPaymentModalOpen(false);

        checkout.destroy();
      });

      checkout.render('payment-form');

      return () => {
        checkout.destroy();
      };
    }
  }, [isPaymentModalOpen]);

  const handleCheckoutTariff = async (plan: Exclude<Tariff['plan'], 'trial'>) => {
    confirmationTokenRef.current = await checkoutTariff(plan);
    setIsPaymentModalOpen(true);
  };

  const handlePurchaseTariff = async (plan: Exclude<Tariff['plan'], 'trial'>) => {
    setChosenPlan(plan);

    if (tariff?.plan === plan) {
      setIsSubmitPaymentModalOpen(true);
    } else {
      handleCheckoutTariff(plan);
    }
  };

  return (
    <Wrapper $isMobile={isMobile}>
      {isSubmitPaymentModalOpen && (
        <Modal
          isSubmitting={isRequestingCheckout}
          onSubmit={() => handleCheckoutTariff(chosenPlan)}
          onClose={() => setIsSubmitPaymentModalOpen(false)}
          title={
            new Date(tariff?.endAt || '') <= new Date() ? 'Продлить подписку?' : 'Восполнить лимиты'
          }
          description="При повторном приобретении данного тарифа лимиты будут восстановлены, а следующее списание средств будет произведено через месяц после этого платежа"
          submitText="Подтвердить"
          declineText="Отменить"
        />
      )}
      {isPaymentModalOpen && <PaymentModal onClose={() => setIsPaymentModalOpen(false)} />}
      <Tariffs onPurchase={handlePurchaseTariff} chosenPlan={chosenPlan} />
    </Wrapper>
  );
};
