import { useState } from 'react';
import { Card, Modal } from '../../UI';
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
import { ContentService } from '../../api';

export const GenerationView = () => {
  const {
    chosenGeneration,
    generationList,
    setMobileView,
    setChosenGeneration,
    setGenerationList,
  } = useGenerationsScope();
  const { isMobile } = useCheckScreenType();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGenerationDeleting, setIsGenerationDeleting] = useState(false);

  const handleGenerationDelete = async () => {
    if (!chosenGeneration?.id) return;

    try {
      setIsGenerationDeleting(true);
      await ContentService.deleteContent({ id: chosenGeneration.id });

      setGenerationList((prevGenerationList) =>
        prevGenerationList.filter((generation) => generation.id !== chosenGeneration.id),
      );

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
          title="Удалить генерацию?"
          description="После подтверждения генерация будет безвозвратно удалена и восстановить её не получится"
          submitText="Подтвердить"
          declineText="Отменить"
        />
      )}
      <Card
        width="100%"
        height="100%"
        maxHeight={isMobile ? 'calc(100lvh - 280px)' : 'calc(100lvh - 130px)'}
        padding="0 25px 0 25px"
      >
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
