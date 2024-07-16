import { useCheckScreenType } from '../../hooks';
import { useOptimizationScope } from '../../scopes';
import { Content, AnalyzingText } from '../../components';
import { Wrapper } from './styled';

export const OptimizationPage = () => {
  const optimizationScope = useOptimizationScope();
  const { isMobile } = useCheckScreenType();

  const { analyzedText, isAnalyzing } = optimizationScope;

  return (
    <Wrapper $isMobile={isMobile}>
      <AnalyzingText {...optimizationScope} onSubmit={() => {}} />
      <Content
        content={analyzedText}
        isGenerating={isAnalyzing}
        emptyContentText="Текст не сгенерирован"
      />
    </Wrapper>
  );
};
