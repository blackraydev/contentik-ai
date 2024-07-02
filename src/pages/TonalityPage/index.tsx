import { useCheckScreenType } from '../../hooks';
import { useTonalityScope } from '../../scopes';
import { Content, AnalyzingText } from '../../components';
import { Wrapper } from './styled';
import { analyzeTonality } from '../../api';

export const TonalityPage = () => {
  const tonalityScope = useTonalityScope();
  const { isMobile } = useCheckScreenType();

  const { analyzedText, isAnalyzing } = tonalityScope;

  return (
    <Wrapper $isMobile={isMobile}>
      <AnalyzingText {...tonalityScope} onSubmit={analyzeTonality} />
      <Content
        content={analyzedText}
        isGenerating={isAnalyzing}
        emptyContentText="Текст не сгенерирован"
      />
    </Wrapper>
  );
};
