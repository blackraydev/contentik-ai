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
} from './styled';

type GenerationItemProps = Generation & {
  onCrossClick: (generationId: string) => void;
};

export const GenerationItem = ({ onCrossClick, ...generation }: GenerationItemProps) => {
  const { chosenGeneration, setChosenGeneration } = useGenerationsScope();

  const {
    id,
    topic,
    contentType,
    targetAudience,
    description,
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
    setChosenGeneration(generation);
  };

  const handleCrossClick = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    e.stopPropagation();
    onCrossClick(id);
  };

  return (
    <GenerationItemStyled onClick={handleGenerationClick} $active={chosenGeneration?.id === id}>
      <GenerationHeader>
        <GenerationTitleWrapper>
          <GenerationTopic>{topic}</GenerationTopic>
          <GenerationDate>{getGenerationDate(createdAt)}</GenerationDate>
        </GenerationTitleWrapper>
        <GenerationDeleteIcon onClick={handleCrossClick} />
      </GenerationHeader>
      <GenerationDescription $hasAdditionalInfo={hasAdditionalInfo}>
        {description}
      </GenerationDescription>
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
