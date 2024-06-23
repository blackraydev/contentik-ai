import { Fragment, useMemo, useState } from 'react';
import { getContent } from '../../api';
import { useUserScope } from '../../scopes';
import { Card, Input, SearchSelect, Select, Textarea } from '../../UI';
import { FormFields, Mode } from './types';
import { languages, styles, tones } from '../../consts';
import { FieldsWrapper, GenerateButton, InteractionStyled, TextareaStyled, Title } from './styled';

type InteractionProps = {
  mode: Mode;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  isGenerating: boolean;
  setGenerating: React.Dispatch<React.SetStateAction<boolean>>;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  topic: string;
  setTopic: React.Dispatch<React.SetStateAction<string>>;
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
}: InteractionProps) => {
  const { session } = useUserScope();
  const [invalidFields, setInvalidFields] = useState<FormFields[]>([]);

  const isInvalid = useMemo(() => {
    if (mode === 'create') {
      return !topic.trim() || !description.trim();
    }
    return !text.trim();
  }, [mode, text, topic, description]);

  const validate = () => {
    if (mode === 'create' && !topic.trim()) {
      setInvalidFields((prev) => [...prev, 'topic']);
    }
    if (mode === 'create' && !description.trim()) {
      setInvalidFields((prev) => [...prev, 'description']);
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
      if (isInvalid) {
        return validate();
      }

      setContent('');
      setGenerating(true);

      const stream = await getContent({
        userId: session?.user.id || '',
        mode,
        text,
        topic,
        description,
        keywords,
        style,
        tone,
        language,
      });
      const decoder = new TextDecoder();

      if (!stream) {
        throw new Error('No stream found');
      }

      for await (const chunk of stream) {
        const decodedChunk = decoder.decode(chunk);
        setContent((prev) => prev + decodedChunk);
      }
    } finally {
      setGenerating(false);
    }
  };

  return (
    <InteractionStyled>
      <Card width="100%" height="fit-content">
        <Title>
          {mode === 'create' ? 'О чём будет ваш пост?' : 'Какой текст вы хотите отредактировать?'}
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
              placeholder="Спорт"
              tooltipProps={{
                content: 'Основная тема или заголовок поста',
                width: 160,
              }}
            />
            <Textarea
              label="Описание"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
                removeInvalidField('description');
              }}
              error={{ visible: invalidFields.includes('description') }}
              placeholder="Влияние ежедневного занятия спортом на состояние здоровья человека. Выделить преимущества и недостатки занятия спортом"
              tooltipProps={{
                content: 'Краткое описание или аннотация поста',
                width: 175,
              }}
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
            placeholder="Текст"
            tooltipProps={{
              content: 'Текст существующего поста, который нужно отредактировать',
              width: 250,
            }}
          />
        )}
      </Card>
      <Card width="100%" height="fit-content">
        <Title>Дополнительные настройки</Title>
        <FieldsWrapper>
          <Input
            label="Ключевые слова"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            placeholder="Арбуз, Банан, Апельсин"
            tooltipProps={{
              content: 'Перечислите ключевые слова через запятую',
              width: 200,
            }}
          />
          <Select
            label="Язык"
            placeholder="Выбрать язык"
            value={language}
            onChange={setLanguage}
            options={languages}
          />
        </FieldsWrapper>
        <FieldsWrapper>
          <SearchSelect
            label="Стиль письма"
            placeholder="Выбрать стиль"
            value={style}
            onChange={setStyle}
            options={styles}
            withClear
          />
          <SearchSelect
            label="Тон"
            placeholder="Выбрать тон"
            value={tone}
            onChange={setTone}
            options={tones}
            withClear
          />
        </FieldsWrapper>
      </Card>
      <GenerateButton
        onClick={handleSubmit}
        isLoading={isGenerating}
        disabled={isGenerating}
        $isGenerating={isGenerating}
      >
        {mode === 'create' ? 'Сгенерировать' : 'Отредактировать'}
      </GenerateButton>
    </InteractionStyled>
  );
};
