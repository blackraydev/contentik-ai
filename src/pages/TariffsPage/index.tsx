import { Button } from '../../UI';
import { useCheckScreenType } from '../../hooks';
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
        <TariffSticker $plan="trial">
          <TariffHeader>
            <TariffTitle>Пробный</TariffTitle>
          </TariffHeader>
          <TariffPrice>Бесплатно</TariffPrice>
          <Button>Выбрать тариф</Button>
        </TariffSticker>

        <TariffFunction>
          <TariffFunctionTitle>Генерации</TariffFunctionTitle>
          <TariffFunctionDescription>
            <MarkIcon />5 генераций
          </TariffFunctionDescription>
          <TariffFunctionDescription>
            <MarkIcon />1 редактирование
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
          <TariffFunctionDescription>
            <MarkIcon />
            25 редактирований
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
            500 генераций
          </TariffFunctionDescription>
          <TariffFunctionDescription>
            <MarkIcon />
            100 редактирований
          </TariffFunctionDescription>
        </TariffFunction>

        <TariffFunction>
          <TariffFunctionTitle>Модель</TariffFunctionTitle>
          <TariffFunctionDescription>
            <MarkIcon />
            GPT-4 Omni
          </TariffFunctionDescription>
        </TariffFunction>

        <TariffFunction>
          <TariffFunctionTitle>Поддержка</TariffFunctionTitle>
          <TariffFunctionDescription>
            <MarkIcon />
            Приоритетная поддержка
          </TariffFunctionDescription>
        </TariffFunction>
      </TariffItemPro>

      <TariffItem>
        <TariffSticker $plan="expert">
          <TariffHeader>
            <TariffTitle>Эксперт</TariffTitle>
          </TariffHeader>
          <TariffPrice>2999 ₽ / месяц</TariffPrice>
          <ChooseExpertTariffButton>Выбрать тариф</ChooseExpertTariffButton>
        </TariffSticker>

        <TariffFunction>
          <TariffFunctionTitle>Генерации</TariffFunctionTitle>
          <TariffFunctionDescription>
            <MarkIcon />
            2000 генераций
          </TariffFunctionDescription>
          <TariffFunctionDescription>
            <MarkIcon />
            250 редактирований
          </TariffFunctionDescription>
        </TariffFunction>

        <TariffFunction>
          <TariffFunctionTitle>Модель</TariffFunctionTitle>
          <TariffFunctionDescription>
            <MarkIcon />
            GPT-4 Omni
          </TariffFunctionDescription>
        </TariffFunction>

        <TariffFunction>
          <TariffFunctionTitle>Поддержка</TariffFunctionTitle>
          <TariffFunctionDescription>
            <MarkIcon />
            Персональная поддержка
          </TariffFunctionDescription>
        </TariffFunction>
      </TariffItem>
    </Wrapper>
  );
};
