import { Fragment, useEffect } from 'react';
import { GenerationList, GenerationView } from '../../components';
import { useCheckMobileScreen } from '../../hooks';
import { supabase } from '../../api';
import { useGenerationsScope, useUserScope } from '../../scopes';
import { Generation } from '../../types';
import { LoaderStyled, LoaderWrapper, Wrapper } from './styled';

export const HistoryPage = () => {
  const { isGenerationListFetched, setGenerationListFetched, setGenerationList } =
    useGenerationsScope();
  const { session } = useUserScope();
  const isMobile = useCheckMobileScreen();

  useEffect(() => {
    if (isGenerationListFetched) return;

    const fetchGenerations = async () => {
      try {
        const userId = session?.user.id;

        if (userId) {
          const { data } = await supabase
            .from('generations')
            .select('*')
            .filter('userId', 'eq', userId);

          setGenerationList(data as Generation[]);
        }
      } finally {
        setGenerationListFetched(true);
      }
    };

    fetchGenerations();
  }, []);

  const renderPageContent = () => {
    if (!isGenerationListFetched) {
      return (
        <LoaderWrapper>
          <LoaderStyled />
        </LoaderWrapper>
      );
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
