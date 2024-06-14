import { useState } from 'react';
import { Button, Input, SearchSelect, Textarea } from '../../UI';
import { getContent } from '../../api';
import { InteractionStyled, SelectStyled } from './styled';
import { useContentScope } from '../../scopes';
import { languages, styles, tones } from './consts';

export const Interaction = () => {
  const [topic, setTopic] = useState('');
  const [description, setDescription] = useState('');
  const [style, setStyle] = useState('');
  const [tone, setTone] = useState('');
  const [language, setLanguage] = useState(languages[0].value);
  const [isLoading, setLoading] = useState(false);
  const { setContent } = useContentScope();

  const isSubmitDisabled = !topic.trim() || !description.trim() || isLoading;

  const handleSubmit = async () => {
    try {
      setContent('');
      setLoading(true);

      const stream = await getContent({ topic, description, style, tone, language });
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
