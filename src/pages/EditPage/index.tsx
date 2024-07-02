import { Fragment } from 'react/jsx-runtime';
import { Content, Interaction } from '../../components';
import { useCheckScreenType } from '../../hooks';
import { useEditContentScope } from '../../scopes';
import { Wrapper } from './styled';

export const EditPage = () => {
  const editContentScope = useEditContentScope();
  const { isMobile } = useCheckScreenType();

  const { content, isGenerating, mobileView, setMobileView } = editContentScope;

  const renderContent = () => {
    if (isMobile) {
      return mobileView === 'info' ? (
        <Interaction {...editContentScope} mode="edit" />
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
        <Interaction {...editContentScope} mode="create" />
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
