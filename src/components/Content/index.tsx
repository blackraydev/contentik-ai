import { useCheckMobileScreen } from '../../hooks';
import { useContentScope } from '../../scopes';
import { Markdown } from './styled';

export const Content = () => {
  const { content } = useContentScope();
  const isMobile = useCheckMobileScreen();

  if (!content) return null;

  return <Markdown source={content} $isMobile={isMobile} />;
};
