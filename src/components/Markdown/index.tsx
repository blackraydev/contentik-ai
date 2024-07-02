import { useCheckScreenType } from '../../hooks';
import { MarkdownStyled } from './styled';

type MarkdownProps = {
  source: string;
};

export const Markdown = ({ source }: MarkdownProps) => {
  const { isMobile } = useCheckScreenType();

  return <MarkdownStyled source={source} $isMobile={isMobile} />;
};
