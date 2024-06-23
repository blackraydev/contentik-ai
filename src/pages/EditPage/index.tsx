import { Content, Interaction } from '../../components';
import { useCheckMobileScreen } from '../../hooks';
import { useEditContentScope } from '../../scopes';
import { Wrapper } from './styled';

export const EditPage = () => {
  const editContentScope = useEditContentScope();
  const isMobile = useCheckMobileScreen();

  const { content, isGenerating } = editContentScope;

  return (
    <Wrapper $isMobile={isMobile}>
      <Interaction {...editContentScope} mode="edit" />
      <Content
        content={content}
        isGenerating={isGenerating}
        emptyContentText="Текст не сгенерирован"
      />
    </Wrapper>
  );
};
