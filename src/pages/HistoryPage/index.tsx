import { Fragment, useEffect } from 'react';
import { GenerationList, GenerationView } from '../../components';
import { useCheckScreenType } from '../../hooks';
import { useGenerationsScope } from '../../scopes';
import { LoaderStyled, LoaderWrapper, Wrapper } from './styled';

export const HistoryPage = () => {
  const { isGenerationListFetched, fetchGenerationList, mobileView } = useGenerationsScope();
  const { isMobile } = useCheckScreenType();

  useEffect(() => {
    if (!isGenerationListFetched) {
      fetchGenerationList();
    }
  }, []);

  const renderPageContent = () => {
    if (!isGenerationListFetched) {
      return (
        <LoaderWrapper>
          <LoaderStyled />
        </LoaderWrapper>
      );
    }

    if (isMobile) {
      return mobileView === 'history' ? <GenerationList /> : <GenerationView />;
    }

    return (
      <Fragment>
        <GenerationList />
        <GenerationView />
      </Fragment>
    );
  };

  return <Wrapper $isMobile={isMobile}>{renderPageContent()}</Wrapper>;
};
