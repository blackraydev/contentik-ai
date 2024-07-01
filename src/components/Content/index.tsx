import { Card, TextSkeleton } from '../../UI';
import { useCheckMobileScreen } from '../../hooks';
import { Markdown } from '../Markdown';
import { ContentStyled, FullWrapper, Text } from './styled';

type ContentProps = {
  content: string;
  isGenerating: boolean;
  emptyContentText: string;
};

export const Content = ({ content, isGenerating, emptyContentText }: ContentProps) => {
  const isMobile = useCheckMobileScreen();

  const renderContent = () => {
    if (content) {
      return <Markdown source={content} />;
    }
    if (isGenerating) {
      return <TextSkeleton />;
    }

    return (
      <FullWrapper>
        <Text>{emptyContentText}</Text>
      </FullWrapper>
    );
  };

  return (
    <ContentStyled>
      <Card width="100%" height={isMobile ? 'fit-content' : 'calc(100vh - 175px)'} padding="0">
        {renderContent()}
      </Card>
    </ContentStyled>
  );
};
