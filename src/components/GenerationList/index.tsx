import { useGenerationsScope } from '../../scopes';
import { GenerationItem } from './components';
import { GenerationListStyled, GenerationsEmptyText } from './styled';

export const GenerationList = () => {
  const { generationList } = useGenerationsScope();

  const renderGenerationList = () => {
    if (!generationList.length) {
      return <GenerationsEmptyText>Генерации отсутствуют</GenerationsEmptyText>;
    }

    return generationList
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .map((generation) => <GenerationItem key={generation.id} {...generation} />);
  };

  return <GenerationListStyled>{renderGenerationList()}</GenerationListStyled>;
};
