import { useGenerationsScope } from '../../../../scopes';
import { Generation } from '../../../../types';
import { getGenerationDate, upperFirst } from './utils';
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
  MagicIcon,
  PenIcon,
} from './styled';
import { useCheckScreenType } from '../../../../hooks';

type GenerationItemProps = Generation & {
  onCrossClick: (generationId: string) => void;
};

export const GenerationItem = ({ onCrossClick, ...generation }: GenerationItemProps) => {
  const { isMobile } = useCheckScreenType();
  const { chosenGeneration, setChosenGeneration, setMobileView } = useGenerationsScope();

  const {
    id,
    mode,
    topic,
    contentType,
    targetAudience,
    description,
    text,
    createdAt,
    keywords,
    style,
    tone,
    language,
  } = generation;

  const hasAdditionalInfo = [contentType, targetAudience, keywords, style, tone, language].some(
    Boolean,
  );

  const handleGenerationClick = () => {
    setMobileView('content');
    setChosenGeneration(generation);
  };

  const handleCrossClick = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    e.stopPropagation();
    onCrossClick(id);
  };

  return (
    <GenerationItemStyled
      onClick={handleGenerationClick}
      $active={chosenGeneration?.id === id}
      $isMobile={isMobile}
    >
      <GenerationHeader>
        <GenerationTitleWrapper>
          {mode === 'create' ? <MagicIcon /> : <PenIcon />}
          {topic && <GenerationTopic>{topic}</GenerationTopic>}
          <GenerationDate>{getGenerationDate(createdAt)}</GenerationDate>
        </GenerationTitleWrapper>
        {!isMobile && <GenerationDeleteIcon onClick={handleCrossClick} />}
      </GenerationHeader>
      {(description || text) && (
        <GenerationDescription $hasAdditionalInfo={hasAdditionalInfo}>
          {description || text}
        </GenerationDescription>
      )}
      {contentType && (
        <GenerationAdditionalWrapper>
          <GenerationAdditionalName>Тип контента</GenerationAdditionalName>
          <GenerationAdditionalInfo>{contentType}</GenerationAdditionalInfo>
        </GenerationAdditionalWrapper>
      )}
      {targetAudience && (
        <GenerationAdditionalWrapper>
          <GenerationAdditionalName>Целевая аудитория</GenerationAdditionalName>
          <GenerationAdditionalInfo>{targetAudience}</GenerationAdditionalInfo>
        </GenerationAdditionalWrapper>
      )}
      {keywords && (
        <GenerationAdditionalWrapper>
          <GenerationAdditionalName>Ключевые слова</GenerationAdditionalName>
          {keywords
            .split(',')
            .filter((keyword) => Boolean(keyword.trim()))
            .map((keyword, index) => (
              <GenerationAdditionalInfo key={index}>{upperFirst(keyword)}</GenerationAdditionalInfo>
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
  );
};
