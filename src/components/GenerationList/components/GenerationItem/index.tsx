import { useState } from 'react';
import { Fragment } from 'react/jsx-runtime';
import { useGenerationsScope } from '../../../../scopes';
import { Generation } from '../../../../types';
import { Modal } from '../../../../UI';
import { supabase } from '../../../../api';
import { getGenerationDate } from './utils';
import {
  GenerationItemStyled,
  GenerationAdditionalInfo,
  GenerationAdditionalName,
  GenerationAdditionalWrapper,
  GenerationDate,
  GenerationDescription,
  GenerationTitleWrapper,
  GenerationTopic,
  GenerationDeleteIcon,
  GenerationHeader,
} from './styled';

export const GenerationItem = (generation: Generation) => {
  const { chosenGeneration, setChosenGeneration } = useGenerationsScope();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGenerationDeleting, setIsGenerationDeleting] = useState(false);

  const { id, topic, description, createdAt, keywords, style, tone, language } = generation;
  const hasAdditionalInfo = [keywords, style, tone, language].some(Boolean);

  const handleClick = () => {
    setChosenGeneration(generation);
  };

  const handleGenerationDelete = async () => {
    try {
      setIsGenerationDeleting(true);
      await supabase.from('generations').delete().eq('id', id);
    } finally {
      setIsGenerationDeleting(false);
    }
  };

  return (
    <Fragment>
      {isModalOpen && (
        <Modal
          isSubmitting={isGenerationDeleting}
          onSubmit={handleGenerationDelete}
          onClose={() => setIsModalOpen(false)}
        />
      )}
      <GenerationItemStyled onClick={handleClick} $active={chosenGeneration?.id === id}>
        <GenerationHeader>
          <GenerationTitleWrapper>
            <GenerationTopic>{topic}</GenerationTopic>
            <GenerationDate>{getGenerationDate(createdAt)}</GenerationDate>
          </GenerationTitleWrapper>
          <GenerationDeleteIcon
            onClick={(e) => {
              e.stopPropagation();
              setIsModalOpen(true);
            }}
          />
        </GenerationHeader>
        <GenerationDescription $hasAdditionalInfo={hasAdditionalInfo}>
          {description}
        </GenerationDescription>
        {keywords && (
          <GenerationAdditionalWrapper>
            <GenerationAdditionalName>Ключевые слова</GenerationAdditionalName>
            {keywords
              .split(',')
              .filter((keyword) => Boolean(keyword.trim()))
              .map((keyword, index) => (
                <GenerationAdditionalInfo key={index}>{keyword}</GenerationAdditionalInfo>
              ))}
          </GenerationAdditionalWrapper>
        )}
        {style && (
          <GenerationAdditionalWrapper>
            <GenerationAdditionalName>Стиль письма</GenerationAdditionalName>
            <GenerationAdditionalInfo>{style}</GenerationAdditionalInfo>
          </GenerationAdditionalWrapper>
        )}
        {tone && (
          <GenerationAdditionalWrapper>
            <GenerationAdditionalName>Тон</GenerationAdditionalName>
            <GenerationAdditionalInfo>{tone}</GenerationAdditionalInfo>
          </GenerationAdditionalWrapper>
        )}
        {language && (
          <GenerationAdditionalWrapper>
            <GenerationAdditionalName>Язык</GenerationAdditionalName>
            <GenerationAdditionalInfo>{language}</GenerationAdditionalInfo>
          </GenerationAdditionalWrapper>
        )}
      </GenerationItemStyled>
    </Fragment>
  );
};
