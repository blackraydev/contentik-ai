import { Button, Card, TextSkeleton } from '../../UI';
import { useCheckScreenType } from '../../hooks';
import { Markdown } from '../Markdown';
import { ContentStyled, FullWrapper, Text } from './styled';

type ContentProps = {
  content: string;
  isGenerating: boolean;
  emptyContentText: string;
  setMobileView?: React.Dispatch<React.SetStateAction<'info' | 'content'>>;
};

export const Content = ({
  content,
  isGenerating,
  emptyContentText,
  setMobileView,
}: ContentProps) => {
  const { isMobile } = useCheckScreenType();

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
    <ContentStyled $isMobile={isMobile}>
      <Card
        width="100%"
        height={isMobile ? 'calc(100lvh - 250px)' : '100%'}
        padding="0 25px 0 25px"
      >
        {renderContent()}
      </Card>
      {isMobile && <Button onClick={() => setMobileView?.('info')}>Параметры</Button>}
    </ContentStyled>
  );
};
