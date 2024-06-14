import { Fragment, useMemo, useState } from 'react';
import { Button, Input, SearchSelect, Tabs, Textarea } from '../../UI';
import { getContent } from '../../api';
import { InteractionStyled, SelectStyled, TextareaStyled } from './styled';
import { useContentScope } from '../../scopes';
import { languages, modes, styles, tones } from './consts';
import { Mode } from './types';

export const Interaction = () => {
  const [mode, setMode] = useState<Mode>(modes[0].value);
  const [text, setText] = useState('');
  const [topic, setTopic] = useState('');
  const [description, setDescription] = useState('');
  const [style, setStyle] = useState('');
  const [tone, setTone] = useState('');
  const [language, setLanguage] = useState(languages[0].value);
  const [isLoading, setLoading] = useState(false);
  const { setContent } = useContentScope();

  const isSubmitDisabled = useMemo(() => {
    if (isLoading) return true;
    if (mode === 'create') {
      return !topic.trim() || !description.trim();
    }
    return !text.trim();
  }, [mode, text, topic, description, isLoading]);

  const handleSubmit = async () => {
    try {
      setContent('');
      setLoading(true);

      const stream = await getContent({ mode, text, topic, description, style, tone, language });
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

  return (
    <InteractionStyled>
      <Tabs options={modes} value={mode} onChange={(value) => setMode(value as Mode)} />
      {mode === 'create' ? (
        <Fragment>
          <Input
            label="Тема *"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Тема"
          />
          <Textarea
            label="Описание *"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Описание"
          />
        </Fragment>
      ) : (
        <TextareaStyled
          label="Текст *"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Текст"
        />
      )}
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
      <Button isLoading={isLoading} disabled={isSubmitDisabled} onClick={handleSubmit}>
        Сгенерировать!
      </Button>
    </InteractionStyled>
  );
};
