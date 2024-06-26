import { useMemo, useState } from 'react';
import { useGenerationsScope } from '../../scopes';
import { GenerationItem, SearchBar } from './components';
import { GenerationHistoryWrapper, GenerationListStyled, GenerationsEmptyText } from './styled';
import { supabase } from '../../api';
import { Modal } from '../../UI';

const filterIgnoredFields = ['id', 'userId', 'createdAt', 'content'];

export const GenerationList = () => {
  const { generationList, chosenGeneration, setChosenGeneration, searchValue, chosenMode } =
    useGenerationsScope();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGenerationDeleting, setIsGenerationDeleting] = useState(false);
  const [generationId, setGenerationId] = useState<string | null>(null);

  const isFiltersApplied = searchValue || chosenMode;
  const filteredGenerationList = useMemo(() => {
    if (!isFiltersApplied) {
      return generationList;
    }

    return generationList.filter((generation) =>
      Object.entries(generation).some(([key, value]) => {
        if (filterIgnoredFields.includes(key)) {
          return false;
        }

        let hasSearchValue = true;

        if (searchValue) {
          hasSearchValue = value ? value?.toLowerCase().includes(searchValue.toLowerCase()) : false;
        }
        if (!chosenMode) {
          return hasSearchValue;
        }

        return hasSearchValue && generation.mode === chosenMode;
      }),
    );
  }, [searchValue, chosenMode, generationList, isFiltersApplied]);

  const handleGenerationDelete = async () => {
    if (!generationId) return;

    try {
      setIsGenerationDeleting(true);
      await supabase.from('generations').delete().eq('id', generationId);

      if (chosenGeneration?.id === generationId) {
        setChosenGeneration(null);
      }
    } finally {
      setIsGenerationDeleting(false);
    }
  };

  const handleCrossClick = (generationId: string) => {
    setIsModalOpen(true);
    setGenerationId(generationId);
  };

  const renderGenerationList = () => {
    if (isFiltersApplied ? !filteredGenerationList.length : !generationList.length) {
      return <GenerationsEmptyText>Генерации отсутствуют</GenerationsEmptyText>;
    }

    return (isFiltersApplied ? filteredGenerationList : generationList)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .map((generation) => (
        <GenerationItem key={generation.id} onCrossClick={handleCrossClick} {...generation} />
      ));
  };

  return (
    <GenerationHistoryWrapper>
      {isModalOpen && (
        <Modal
          isSubmitting={isGenerationDeleting}
          onSubmit={handleGenerationDelete}
          onClose={() => setIsModalOpen(false)}
        />
      )}
      <SearchBar />
      <GenerationListStyled>{renderGenerationList()}</GenerationListStyled>
    </GenerationHistoryWrapper>
  );
};
