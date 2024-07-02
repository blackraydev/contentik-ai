import { useCheckScreenType } from '../../hooks';
import { Card } from '../../UI';
import { GenerateButton, Title, AnalyzingTextStyled } from './styled';
import { MarkdownEditor } from '../MarkdownEditor';

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
  const {isMobile} = useCheckScreenType();

  const handleSubmit = async () => {
    try {
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

  console.log(text);

  return (
    <AnalyzingTextStyled>
      <Card width="100%" height={isMobile ? 'fit-content' : 'calc(100vh - 252px)'} padding="0">
        <Title>Какой текст вы хотите проанализировать?</Title>
        <MarkdownEditor value={text} onChange={(value) => setText(value)} />
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
