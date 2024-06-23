import { Content, Interaction } from '../../components';
import { useCheckMobileScreen } from '../../hooks';
import { useCreateContentScope } from '../../scopes';
import { Wrapper } from './styled';

export const CreatePage = () => {
  const createContentScope = useCreateContentScope();
  const isMobile = useCheckMobileScreen();

  const { content, isGenerating } = createContentScope;

  return (
    <Wrapper $isMobile={isMobile}>
      <Interaction {...createContentScope} mode="create" />
      <Content
        content={content}
        isGenerating={isGenerating}
        emptyContentText="Текст не сгенерирован"
      />
    </Wrapper>
  );
};
