import { useCheckScreenType } from '../../hooks';
import { useOptimizationScope } from '../../scopes';
import { Content, AnalyzingText } from '../../components';
import { analyzeOptimization } from '../../api';
import { Wrapper } from './styled';

export const OptimizationPage = () => {
  const optimizationScope = useOptimizationScope();
  const { isMobile } = useCheckScreenType();

  const { analyzedText, isAnalyzing } = optimizationScope;

  return (
    <Wrapper $isMobile={isMobile}>
      <AnalyzingText {...optimizationScope} onSubmit={analyzeOptimization} />
      <Content
        content={analyzedText}
        isGenerating={isAnalyzing}
        emptyContentText="Текст не сгенерирован"
      />
    </Wrapper>
  );
};
