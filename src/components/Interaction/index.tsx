import { Fragment, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContentService } from '../../api';
import { useGenerationsScope, useTariffScope, useToastsScope, useUserScope } from '../../scopes';
import { Accordion, Button, Card, Input, SearchSelect, Textarea } from '../../UI';
import { FormFields, Mode } from './types';
import { contentTypes, languages, PrivateRoutes, styles, tones } from '../../consts';
import { useCheckScreenType } from '../../hooks';
import { scrollToFirstError, scrollToTop } from '../../utils';
import { OutOfGenerationsModal, SubscriptionExpiredModal } from './components';
import {
  ButtonsWrapper,
  FieldsWrapper,
  GenerateButton,
  InteractionStyled,
  LanguageSelect,
  TextareaStyled,
  Title,
} from './styled';

type InteractionProps = {
  mode: Mode;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  isGenerating: boolean;
  setGenerating: React.Dispatch<React.SetStateAction<boolean>>;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  topic: string;
  setTopic: React.Dispatch<React.SetStateAction<string>>;
  contentType: string;
  setContentType: React.Dispatch<React.SetStateAction<string>>;
  targetAudience: string;
  setTargetAudience: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  keywords: string;
  setKeywords: React.Dispatch<React.SetStateAction<string>>;
  style: string;
  setStyle: React.Dispatch<React.SetStateAction<string>>;
  tone: string;
  setTone: React.Dispatch<React.SetStateAction<string>>;
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  setMobileView: React.Dispatch<React.SetStateAction<'info' | 'content'>>;
};

export const Interaction = ({
  isGenerating,
  setContent,
  setGenerating,
  mode,
  text,
  setText,
  topic,
  setTopic,
  contentType,
  setContentType,
  targetAudience,
  setTargetAudience,
  description,
  setDescription,
  keywords,
  setKeywords,
  style,
  setStyle,
  tone,
  setTone,
  language,
  setLanguage,
  setMobileView,
}: InteractionProps) => {
  const navigate = useNavigate();
  const { showToast } = useToastsScope();
  const { isMobile } = useCheckScreenType();
  const { user } = useUserScope();
  const { fetchGenerationList } = useGenerationsScope();
  const { tariff, fetchTariff, decrementGeneration } = useTariffScope();

  const [invalidFields, setInvalidFields] = useState<FormFields[]>([]);
  const [isOutOfGenerationsModalOpen, setIsOutOfGenerationsModalOpen] = useState(false);
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);

  const isInvalid = useMemo(() => {
    if (mode === 'create') {
      return !topic.trim();
    }
    return !text.trim();
  }, [mode, text, topic]);

  const validate = () => {
    if (mode === 'create' && !topic.trim()) {
      setInvalidFields((prev) => [...prev, 'topic']);
    }
    if (mode === 'edit' && !text.trim()) {
      setInvalidFields((prev) => [...prev, 'text']);
    }
  };

  const removeInvalidField = (field: FormFields) => {
    setInvalidFields((prev) => prev.filter((it) => it !== field));
  };

  const handleSubmit = async () => {
    try {
      const generationField = mode === 'create' ? 'creations' : 'edits';

      // Закончились генерации
      if (!tariff || tariff[generationField] <= 0) {
        return setIsOutOfGenerationsModalOpen(true);
      }
      // Истекла подписка
      if (tariff.isExpired) {
        return setIsSubscriptionModalOpen(true);
      }

      if (isInvalid) {
        validate();
        scrollToFirstError();
        return;
      }

      setContent('');
      handleNavigateToContent();
      setGenerating(true);
      decrementGeneration(mode);

      const stream = await ContentService.generateContent({
        userId: user?.id || '',
        mode,
        text,
        topic,
        contentType,
        targetAudience,
        description,
        keywords,
        style,
        tone,
        language,
      });

      const decoder = new TextDecoder();

      if (!stream) {
        throw new Error('Stream not found');
      }

      const reader = stream.getReader();

      const read = async () => {
        const { done, value } = await reader.read();
        if (done) return;

        const decodedChunk = decoder.decode(value);
        setContent((prev) => prev + decodedChunk);

        await read();
      };

      await read();

      await fetchGenerationList();
    } catch (e: any) {
      if (e?.status === 402) {
        showToast(e.message, 'failure');
      } else {
        showToast('Произошла техническая ошибка', 'failure');
      }

      await fetchTariff();
    } finally {
      setGenerating(false);
    }
  };

  const handleNavigateToContent = () => {
    setMobileView('content');
    scrollToTop();
  };

  return (
    <InteractionStyled $isMobile={isMobile}>
      {isOutOfGenerationsModalOpen && (
        <OutOfGenerationsModal
          onSubmit={() => navigate(PrivateRoutes.Tariffs)}
          onClose={() => setIsOutOfGenerationsModalOpen(false)}
        />
      )}
      {isSubscriptionModalOpen && (
        <SubscriptionExpiredModal
          onSubmit={() => navigate(PrivateRoutes.Tariffs)}
          onClose={() => setIsSubscriptionModalOpen(false)}
        />
      )}
      <Card width="100%" height={'fit-content'}>
        <Title>
          {mode === 'create'
            ? 'О чём будет ваш контент?'
            : 'Какой контент вы хотите отредактировать?'}
        </Title>
        {mode === 'create' ? (
          <Fragment>
            <Input
              label="Тема"
              value={topic}
              onChange={(e) => {
                setTopic(e.target.value);
                removeInvalidField('topic');
              }}
              error={{ visible: invalidFields.includes('topic') }}
              placeholder="Здоровое питание"
              tooltipProps={{
                content: 'Основная тема или заголовок',
                width: 160,
              }}
              maxLength={150}
            />
            <Textarea
              label="Описание"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Польза овощей и фруктов для здоровья"
              tooltipProps={{
                content: 'Краткое описание или аннотация',
                width: 175,
              }}
              maxLength={1000}
            />
          </Fragment>
        ) : (
          <TextareaStyled
            label="Текст"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              removeInvalidField('text');
            }}
            error={{ visible: invalidFields.includes('text') }}
            maxLength={tariff?.plan === 'trial' ? 1500 : 10000}
          />
        )}
      </Card>
      <Accordion title="Характеристики" width="100%" height="fit-content">
        <FieldsWrapper>
          <SearchSelect
            label="Тип контента"
            placeholder="Пост"
            value={contentType}
            onChange={setContentType}
            options={contentTypes}
            withClear
            maxLength={150}
          />
          <Input
            label="Целевая аудитория"
            value={targetAudience}
            onChange={(e) => setTargetAudience(e.target.value)}
            placeholder="Молодые мамы"
            tooltipProps={{
              content: 'Перечислите целевые аудитории через запятую',
              width: 200,
            }}
            maxLength={250}
          />
        </FieldsWrapper>
        <Input
          label="Ключевые слова"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          placeholder="Здоровое питание, овощи, фрукты"
          tooltipProps={{
            content: 'Перечислите ключевые слова через запятую',
            width: 200,
          }}
          maxLength={500}
        />
      </Accordion>
      <Accordion title="Дополнительные настройки" width="100%" height="fit-content">
        <FieldsWrapper>
          <SearchSelect
            label="Стиль письма"
            placeholder="Дружелюбный"
            value={style}
            onChange={setStyle}
            options={styles}
            withClear
            maxLength={150}
          />
          <SearchSelect
            label="Тон"
            placeholder="Вдохновляющий"
            value={tone}
            onChange={setTone}
            options={tones}
            withClear
            maxLength={150}
          />
        </FieldsWrapper>
        <LanguageSelect
          label="Язык"
          placeholder="Язык"
          value={language}
          onChange={setLanguage}
          options={languages}
          $isMobile={isMobile}
        />
      </Accordion>
      {isMobile ? (
        <ButtonsWrapper>
          <GenerateButton
            onClick={handleSubmit}
            isLoading={isGenerating}
            disabled={isGenerating}
            $isGenerating={isGenerating}
          >
            {mode === 'create' ? 'Сгенерировать' : 'Отредактировать'}
          </GenerateButton>
          <Button onClick={handleNavigateToContent}>Контент</Button>
        </ButtonsWrapper>
      ) : (
        <GenerateButton
          onClick={handleSubmit}
          isLoading={isGenerating || !tariff}
          disabled={isGenerating || !tariff}
          $isGenerating={isGenerating}
        >
          {mode === 'create' ? 'Сгенерировать' : 'Отредактировать'}
        </GenerateButton>
      )}
    </InteractionStyled>
  );
};
