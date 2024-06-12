import { useContentScope } from '../../scopes';
import { Markdown } from './styled';

export const Content = () => {
  const { content } = useContentScope();

  return <Markdown source={content} />;
};
