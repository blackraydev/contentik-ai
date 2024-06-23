import { Fragment, useMemo, useState } from 'react';
import { getContent } from '../../api';
import { useContentScope, useUserScope } from '../../scopes';
import { Card, Input, SearchSelect, Select, Textarea } from '../../UI';
import { FormFields } from './types';
import { languages, styles, tones } from '../../consts';
import { FieldsWrapper, GenerateButton, InteractionStyled, TextareaStyled, Title } from './styled';

export const Interaction = () => {
  const { session } = useUserScope();
  const {
    isGenerating,
    setContent,
    setGenerating,
    mode,
    setMode,
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
    photos,
    setPhotos,
  } = useContentScope();
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
        photos,
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

  // const handlePhotoUploaded = (file?: File) => {
  //   if (file) {
  //     setPhotos((prev) => [...prev, file]);
  //   }
  // };

  // const handlePhotoRemove = (index: number) => {
  //   setPhotos((prev) => prev.filter((_, i) => i !== index));
  // };

  return (
    <InteractionStyled>
      {/* <Tabs
        options={modes}
        value={mode}
        onChange={(value) => {
          setMode(value as Mode);
          setInvalidFields([]);
        }}
      /> */}
      <Card width="100%" height="fit-content">
        <Title>О чём будет ваш пост?</Title>
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
      {/* <Card width="100%" height="fit-content">
        <PhotoUpload
          photos={photos}
          onPhotoUploaded={handlePhotoUploaded}
          onPhotoRemove={handlePhotoRemove}
          mode={mode}
        />
      </Card> */}
      <GenerateButton
        onClick={handleSubmit}
        isLoading={isGenerating}
        disabled={isGenerating}
        $isGenerating={isGenerating}
      >
        Сгенерировать
      </GenerateButton>
    </InteractionStyled>
  );
};
