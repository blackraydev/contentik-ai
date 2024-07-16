import { useCheckScreenType } from '../../hooks';
import { useTonalityScope } from '../../scopes';
import { Content, AnalyzingText } from '../../components';
import { Wrapper } from './styled';

export const TonalityPage = () => {
  const tonalityScope = useTonalityScope();
  const { isMobile } = useCheckScreenType();

  const { analyzedText, isAnalyzing } = tonalityScope;

  return (
    <Wrapper $isMobile={isMobile}>
      <AnalyzingText {...tonalityScope} onSubmit={() => {}} />
      <Content
        content={analyzedText}
        isGenerating={isAnalyzing}
        emptyContentText="Текст не сгенерирован"
      />
    </Wrapper>
  );
};
