import { Fragment } from 'react/jsx-runtime';
import { Content, Interaction } from '../../components';
import { useCheckScreenType } from '../../hooks';
import { useCreateContentScope } from '../../scopes';
import { Wrapper } from './styled';

export const CreatePage = () => {
  const createContentScope = useCreateContentScope();
  const { isMobile } = useCheckScreenType();

  const { content, isGenerating, mobileView, setMobileView } = createContentScope;

  const renderContent = () => {
    if (isMobile) {
      return mobileView === 'info' ? (
        <Interaction {...createContentScope} mode="create" />
      ) : (
        <Content
          content={content}
          isGenerating={isGenerating}
          emptyContentText="Контент не сгенерирован"
          setMobileView={setMobileView}
        />
      );
    }

    return (
      <Fragment>
        <Interaction {...createContentScope} mode="create" />
        <Content
          content={content}
          isGenerating={isGenerating}
          emptyContentText="Контент не сгенерирован"
        />
      </Fragment>
    );
  };

  return <Wrapper $isMobile={isMobile}>{renderContent()}</Wrapper>;
};
