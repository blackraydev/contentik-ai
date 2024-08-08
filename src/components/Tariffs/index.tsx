import { Fragment } from 'react/jsx-runtime';
import {
  ChooseExpertTariffButton,
  ChooseTariffButton,
  MarkIcon,
  TariffChips,
  TariffFunction,
  TariffFunctionDescription,
  TariffFunctionTitle,
  TariffHeader,
  TariffItem,
  TariffItemPro,
  TariffOldPrice,
  TariffPrice,
  TariffSticker,
  TariffStickerPro,
  TariffTitle,
} from './styled';
import { Button } from '../../UI';
import { useTariffScope } from '../../scopes';
import { useCheckScreenType } from '../../hooks';
import { Tariff } from '../../types';

type TariffsProps = {
  onPurchase: (plan: Exclude<Tariff['plan'], 'trial'>) => void;
  chosenPlan: Exclude<Tariff['plan'], 'trial'>;
};

export const Tariffs = ({ onPurchase, chosenPlan }: TariffsProps) => {
  const { isMobile } = useCheckScreenType();
  const { tariff, isRequestingCheckout } = useTariffScope();

  const getButtonText = (plan: Exclude<Tariff['plan'], 'trial'>) => {
    if (tariff?.plan !== plan) return 'Выбрать тариф';

    if (tariff.isExpired) {
      return 'Продлить подписку';
    }

    return 'Восполнить лимиты';
  };

  return (
    <Fragment>
      <TariffItem $isMobile={isMobile}>
        <TariffSticker $plan="start">
          <TariffHeader>
            <TariffTitle>Стартовый</TariffTitle>
            <TariffChips>Скидка 25%</TariffChips>
          </TariffHeader>
          <TariffPrice>
            <TariffOldPrice>549 ₽ / месяц</TariffOldPrice>
            399 ₽ / месяц
          </TariffPrice>
          <Button
            isLoading={chosenPlan === 'start' && isRequestingCheckout}
            onClick={() => onPurchase('start')}
          >
            {getButtonText('start')}
          </Button>
        </TariffSticker>

        <TariffFunction>
          <TariffFunctionDescription>Подходит для базового использования</TariffFunctionDescription>
        </TariffFunction>

        <TariffFunction>
          <TariffFunctionTitle>Лимиты генераций</TariffFunctionTitle>
          <TariffFunctionDescription>
            <MarkIcon />
            50 созданий
          </TariffFunctionDescription>
          <TariffFunctionDescription>
            <MarkIcon />
            25 редактирований
          </TariffFunctionDescription>
        </TariffFunction>
      </TariffItem>

      <TariffItemPro $isMobile={isMobile}>
        <TariffStickerPro>
          <TariffSticker $plan="pro">
            <TariffHeader>
              <TariffTitle>Про</TariffTitle>
              <TariffChips>Скидка 30%</TariffChips>
              <TariffChips>Популярный</TariffChips>
            </TariffHeader>
            <TariffPrice>
              <TariffOldPrice>999 ₽ / месяц</TariffOldPrice>
              699 ₽ / месяц
            </TariffPrice>
            <ChooseTariffButton
              isLoading={chosenPlan === 'pro' && isRequestingCheckout}
              onClick={() => onPurchase('pro')}
            >
              {getButtonText('pro')}
            </ChooseTariffButton>
          </TariffSticker>
        </TariffStickerPro>

        <TariffFunction>
          <TariffFunctionDescription>
            Подходит для активного использования
          </TariffFunctionDescription>
        </TariffFunction>

        <TariffFunction>
          <TariffFunctionTitle>Лимиты генераций</TariffFunctionTitle>
          <TariffFunctionDescription>
            <MarkIcon />
            150 созданий
          </TariffFunctionDescription>
          <TariffFunctionDescription>
            <MarkIcon />
            75 редактирований
          </TariffFunctionDescription>
        </TariffFunction>
      </TariffItemPro>

      <TariffItem $isMobile={isMobile}>
        <TariffSticker $plan="expert">
          <TariffHeader>
            <TariffTitle>Эксперт</TariffTitle>
            <TariffChips>Скидка 35%</TariffChips>
          </TariffHeader>
          <TariffPrice>
            <TariffOldPrice>1999 ₽ / месяц</TariffOldPrice>
            1299 ₽ / месяц
          </TariffPrice>
          <ChooseExpertTariffButton
            isLoading={chosenPlan === 'expert' && isRequestingCheckout}
            onClick={() => onPurchase('expert')}
          >
            {getButtonText('expert')}
          </ChooseExpertTariffButton>
        </TariffSticker>

        <TariffFunction>
          <TariffFunctionDescription>
            Подходит для серьёзной объемной работы
          </TariffFunctionDescription>
        </TariffFunction>

        <TariffFunction>
          <TariffFunctionTitle>Лимиты генераций</TariffFunctionTitle>
          <TariffFunctionDescription>
            <MarkIcon />
            500 созданий
          </TariffFunctionDescription>
          <TariffFunctionDescription>
            <MarkIcon />
            250 редактирований
          </TariffFunctionDescription>
        </TariffFunction>
      </TariffItem>
    </Fragment>
  );
};
