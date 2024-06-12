import { useState } from 'react';
import { Button, Input, Textarea } from '../../UI';
import { getContent } from '../../api';
import { InteractionStyled } from './styled';
import { useContentScope } from '../../scopes';

export const Interaction = () => {
  const [topic, setTopic] = useState('');
  const [description, setDescription] = useState('');
  const [isLoading, setLoading] = useState(false);
  const { setContent } = useContentScope();

  const isSubmitDisabled = !topic.trim() || !description.trim() || isLoading;

  const handleSubmit = async () => {
    try {
      setContent('');
      setLoading(true);

      const stream = await getContent({ title: topic, description });
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
      <Input value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="Тема" />
      <Textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Описание"
      />
      <Button isLoading={isLoading} disabled={isSubmitDisabled} onClick={handleSubmit}>
        Сгенерировать!
      </Button>
    </InteractionStyled>
  );
};
