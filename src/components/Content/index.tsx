import { Card } from '../../UI';
import { useCheckMobileScreen } from '../../hooks';
import { useContentScope } from '../../scopes';
import { Markdown } from './styled';

export const Content = () => {
  const { content, contentDisplayed } = useContentScope();
  const isMobile = useCheckMobileScreen();

  if (!contentDisplayed) return null;

  return (
    <Card
      width={isMobile ? '100%' : '700px'}
      height={isMobile ? 'fit-content' : 'calc(100vh - 175px)'}
    >
      <Markdown source={content} $isMobile={isMobile} />
    </Card>
  );
};
