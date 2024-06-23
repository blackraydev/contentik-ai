import { Content, Interaction } from '../../components';
import { useCheckMobileScreen } from '../../hooks';
import { useContentScope } from '../../scopes';
import { Wrapper } from './styled';

export const CreatePage = () => {
  const { content, isGenerating } = useContentScope();
  const isMobile = useCheckMobileScreen();

  return (
    <Wrapper $isMobile={isMobile}>
      <Interaction />
      <Content
        content={content}
        isGenerating={isGenerating}
        emptyContentText="Текст не сгенерирован"
      />
    </Wrapper>
  );
};
