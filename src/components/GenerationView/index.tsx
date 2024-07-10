import { useState } from 'react';
import { Card, Modal } from '../../UI';
import { supabase } from '../../api';
import { useCheckScreenType } from '../../hooks';
import { useGenerationsScope } from '../../scopes';
import { Markdown } from '../Markdown';
import {
  BackToHistoryButton,
  ButtonsWrapper,
  DeleteButton,
  FullWrapper,
  GenerationViewStyled,
  Text,
} from './styled';

export const GenerationView = () => {
  const { chosenGeneration, generationList, setMobileView, setChosenGeneration } =
    useGenerationsScope();
  const { isMobile } = useCheckScreenType();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGenerationDeleting, setIsGenerationDeleting] = useState(false);

  const handleGenerationDelete = async () => {
    if (!chosenGeneration?.id) return;

    try {
      setIsGenerationDeleting(true);
      await supabase.from('generations').delete().eq('id', chosenGeneration.id);
      setChosenGeneration(null);
      setMobileView('history');
    } finally {
      setIsGenerationDeleting(false);
    }
  };

  const renderContent = () => {
    if (chosenGeneration) {
      return <Markdown source={chosenGeneration.content} />;
    }

    return (
      <FullWrapper>
        <Text>Выберите генерацию</Text>
      </FullWrapper>
    );
  };

  if (!generationList.length) {
    return null;
  }

  return (
    <GenerationViewStyled $isMobile={isMobile}>
      {isModalOpen && (
        <Modal
          isSubmitting={isGenerationDeleting}
          onSubmit={handleGenerationDelete}
          onClose={() => setIsModalOpen(false)}
        />
      )}
      <Card width="100%" height={isMobile ? 'calc(100lvh - 280px)' : 'calc(100vh - 175px)'} padding="0 25px 0 25px">
        {renderContent()}
      </Card>
      {isMobile && (
        <ButtonsWrapper>
          <BackToHistoryButton onClick={() => setMobileView?.('history')}>
            История
          </BackToHistoryButton>
          <DeleteButton onClick={() => setIsModalOpen(true)}>Удалить</DeleteButton>
        </ButtonsWrapper>
      )}
    </GenerationViewStyled>
  );
};
