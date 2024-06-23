import { Card } from '../../UI';
import { useCheckMobileScreen } from '../../hooks';
import { useGenerationsScope } from '../../scopes';
import { Markdown } from '../Markdown';
import { FullWrapper, GenerationViewStyled, Text } from './styled';

export const GenerationView = () => {
  const { chosenGeneration, generationList } = useGenerationsScope();
  const isMobile = useCheckMobileScreen();

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
    <GenerationViewStyled>
      <Card
        width={isMobile ? '100%' : '100%'}
        height={isMobile ? 'fit-content' : 'calc(100vh - 175px)'}
      >
        {renderContent()}
      </Card>
    </GenerationViewStyled>
  );
};
