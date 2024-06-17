import { Fragment, useMemo, useState } from 'react';
import { Button, Card, Input, SearchSelect, Tabs, Textarea } from '../../UI';
import { getContent } from '../../api';
import { InteractionStyled, SelectStyled, TextareaStyled } from './styled';
import { useContentScope } from '../../scopes';
import { languages, modes, styles, tones } from './consts';
import { Mode, FormFields } from './types';
import { PhotoUpload } from './components';

export const Interaction = () => {
  const [mode, setMode] = useState<Mode>(modes[0].value);
  const [text, setText] = useState('');
  const [topic, setTopic] = useState('');
  const [description, setDescription] = useState('');
  const [keywords, setKeywords] = useState('');
  const [photos, setPhotos] = useState<File[]>([]);
  const [style, setStyle] = useState('');
  const [tone, setTone] = useState('');
  const [language, setLanguage] = useState(languages[0].value);
  const [isLoading, setLoading] = useState(false);
  const [invalidFields, setInvalidFields] = useState<FormFields[]>([]);
  const { contentDisplayed, setContent, setContentDisplayed } = useContentScope();

  const isInvalid = useMemo(() => {
    if (mode === 'create') {
      return !topic.trim();
    }
    return !text.trim();
  }, [mode, text, topic, description]);

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
      if (isInvalid) {
        return validate();
      }

      if (!contentDisplayed) {
        setContentDisplayed(true);
      } else {
        setContent('');
      }

      setLoading(true);

      const stream = await getContent({
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
      setLoading(false);
    }
  };

  const handlePhotoUploaded = (file?: File) => {
    if (file) {
      setPhotos((prev) => [...prev, file]);
    }
  };

  const handlePhotoRemove = (index: number) => {
    setPhotos((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <InteractionStyled>
      <Tabs
        options={modes}
        value={mode}
        onChange={(value) => {
          setMode(value as Mode);
          setInvalidFields([]);
        }}
      />
      <Card width="400px" height="fit-content">
        {mode === 'create' ? (
          <Fragment>
            <Input
              label="Тема"
              value={topic}
              onChange={(e) => {
                setTopic(e.target.value);
                removeInvalidField('topic');
              }}
              invalid={invalidFields.includes('topic')}
              placeholder="Тема"
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
              invalid={invalidFields.includes('description')}
              placeholder="Описание"
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
            invalid={invalidFields.includes('text')}
            placeholder="Текст"
            tooltipProps={{
              content: 'Текст существующего поста, который нужно отредактировать',
              width: 250,
            }}
          />
        )}
        <Input
          label="Ключевые слова"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          invalid={invalidFields.includes('keywords')}
          placeholder="Ключевые слова"
          tooltipProps={{
            content: 'Перечислите ключевые слова через запятую',
            width: 200,
          }}
        />
        <PhotoUpload
          photos={photos}
          onPhotoUploaded={handlePhotoUploaded}
          onPhotoRemove={handlePhotoRemove}
          mode={mode}
        />
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
        <SelectStyled
          label="Язык"
          placeholder="Выбрать язык"
          value={language}
          onChange={setLanguage}
          options={languages}
        />
        <Button isLoading={isLoading} disabled={isLoading} onClick={handleSubmit}>
          {isLoading ? 'Генерация' : 'Сгенерировать'}
        </Button>
      </Card>
    </InteractionStyled>
  );
};
