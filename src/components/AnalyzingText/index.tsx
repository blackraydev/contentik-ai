import { useMemo, useState } from 'react';
import { useCheckMobileScreen } from '../../hooks';
import { Card } from '../../UI';
import { GenerateButton, TextareaStyled, Title, AnalyzingTextStyled } from './styled';

type FormFields = 'text';

type AnalyzingTextProps = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  setAnalyzedText: React.Dispatch<React.SetStateAction<string>>;
  isAnalyzing: boolean;
  setIsAnalyzing: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit: ({ text }: { text: string }) => Promise<ReadableStream<Uint8Array> | null>;
};

export const AnalyzingText = ({
  text,
  setText,
  setAnalyzedText,
  isAnalyzing,
  setIsAnalyzing,
  onSubmit,
}: AnalyzingTextProps) => {
  const isMobile = useCheckMobileScreen();
  const [invalidFields, setInvalidFields] = useState<FormFields[]>([]);

  const isInvalid = useMemo(() => !text.trim(), [text]);

  const validate = () => {
    if (!text.trim()) {
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

      setAnalyzedText('');
      setIsAnalyzing(true);

      const stream = await onSubmit({ text });
      const decoder = new TextDecoder();

      if (!stream) {
        throw new Error('No stream found');
      }

      for await (const chunk of stream) {
        const decodedChunk = decoder.decode(chunk);
        setAnalyzedText((prev) => prev + decodedChunk);
      }
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <AnalyzingTextStyled>
      <Card width="100%" height={isMobile ? 'fit-content' : 'calc(100vh - 252px)'} padding="0">
        <Title>Какой текст вы хотите проанализировать?</Title>
        <TextareaStyled
          value={text}
          label="Текст"
          onChange={(e) => {
            setText(e.target.value);
            removeInvalidField('text');
          }}
          error={{ visible: invalidFields.includes('text') }}
        />
      </Card>
      <GenerateButton
        onClick={handleSubmit}
        isLoading={isAnalyzing}
        disabled={isAnalyzing}
        $isGenerating={isAnalyzing}
      >
        Проанализировать
      </GenerateButton>
    </AnalyzingTextStyled>
  );
};
