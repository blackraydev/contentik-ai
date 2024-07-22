import { useTariffScope } from '../../../../scopes';
import { Modal } from '../../../../UI';

type SubscriptionExpiredModalProps = {
  onSubmit: () => void;
  onClose: () => void;
};

export const SubscriptionExpiredModal = ({ onClose, onSubmit }: SubscriptionExpiredModalProps) => {
  const { tariff } = useTariffScope();

  if (!tariff) return null;

  const isTrial = tariff.plan === 'trial';
  const description = isTrial
    ? 'Чтобы продолжить, выберите подходящий тариф'
    : 'Вы можете продлить подписку или выбрать другой тарифный план';

  return (
    <Modal
      onSubmit={onSubmit}
      onClose={onClose}
      title="Подписка истекла 😔"
      description={description}
      submitText="К тарифам"
      declineText="Закрыть"
    />
  );
};
