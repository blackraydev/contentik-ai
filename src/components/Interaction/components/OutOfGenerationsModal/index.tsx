import { useTariffScope } from '../../../../scopes';
import { Modal } from '../../../../UI';

type OutOfGenerationsModalProps = {
  onSubmit: () => void;
  onClose: () => void;
};

export const OutOfGenerationsModal = ({ onClose, onSubmit }: OutOfGenerationsModalProps) => {
  const { tariff } = useTariffScope();

  if (!tariff) return null;

  const isTrial = tariff.plan === 'trial';
  const description = isTrial
    ? 'Чтобы продолжить, выберите подходящий тариф'
    : 'Вы можете переоформить подписку и восполнить лимиты, не дожидаясь следующего месяца, либо выбрать другой тарифный план';

  return (
    <Modal
      onSubmit={onSubmit}
      onClose={onClose}
      title="Лимит генераций исчерпан 😔"
      description={description}
      submitText="К тарифам"
      declineText="Закрыть"
    />
  );
};
