import { Button } from '../../UI';
import { useCheckScreenType } from '../../hooks';
import {
  ChooseTariffButton,
  MarkIcon,
  TariffChips,
  TariffFunction,
  TariffFunctionDescription,
  TariffFunctionTitle,
  TariffHeader,
  TariffItem,
  TariffItemPro,
  TariffPrice,
  TariffSticker,
  TariffStickerPro,
  TariffTitle,
  Wrapper,
} from './styled';

export const TariffsPage = () => {
  const { isMobile } = useCheckScreenType();

  return (
    <Wrapper $isMobile={isMobile}>
      <TariffItem>
        <TariffSticker $plan="start">
          <TariffHeader>
            <TariffTitle>Стартовый</TariffTitle>
          </TariffHeader>
          <TariffPrice>499 ₽ / месяц</TariffPrice>
          <Button>Выбрать тариф</Button>
        </TariffSticker>

        <TariffFunction>
          <TariffFunctionTitle>Генерации</TariffFunctionTitle>
          <TariffFunctionDescription>
            <MarkIcon />
            50 генераций
          </TariffFunctionDescription>
        </TariffFunction>

        <TariffFunction>
          <TariffFunctionTitle>Модель</TariffFunctionTitle>
          <TariffFunctionDescription>
            <MarkIcon />
            GPT-3.5
          </TariffFunctionDescription>
        </TariffFunction>
      </TariffItem>

      <TariffItemPro>
        <TariffStickerPro>
          <TariffSticker $plan="pro">
            <TariffHeader>
              <TariffTitle>Про</TariffTitle>
              <TariffChips>Популярный</TariffChips>
            </TariffHeader>
            <TariffPrice>1499 ₽ / месяц</TariffPrice>
            <ChooseTariffButton>Выбрать тариф </ChooseTariffButton>
          </TariffSticker>
        </TariffStickerPro>

        <TariffFunction>
          <TariffFunctionTitle>Генерации</TariffFunctionTitle>
          <TariffFunctionDescription>
            <MarkIcon />
            200 генераций
          </TariffFunctionDescription>
        </TariffFunction>

        <TariffFunction>
          <TariffFunctionTitle>Модель</TariffFunctionTitle>
          <TariffFunctionDescription>
            <MarkIcon />
            GPT-4 Omni
          </TariffFunctionDescription>
        </TariffFunction>
      </TariffItemPro>

      <TariffItem>
        <TariffSticker $plan="expert">
          <TariffHeader>
            <TariffTitle>Эксперт</TariffTitle>
          </TariffHeader>
          <TariffPrice>2999 ₽ / месяц</TariffPrice>
          <Button>Выбрать тариф</Button>
        </TariffSticker>

        <TariffFunction>
          <TariffFunctionTitle>Генерации</TariffFunctionTitle>
          <TariffFunctionDescription>
            <MarkIcon />
            500 генераций
          </TariffFunctionDescription>
        </TariffFunction>

        <TariffFunction>
          <TariffFunctionTitle>Модель</TariffFunctionTitle>
          <TariffFunctionDescription>
            <MarkIcon />
            GPT-4 Omni
          </TariffFunctionDescription>
        </TariffFunction>
      </TariffItem>
    </Wrapper>
  );
};
