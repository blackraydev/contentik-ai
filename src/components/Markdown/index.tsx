import { useCheckMobileScreen } from '../../hooks';
import { MarkdownStyled } from './styled';

type MarkdownProps = {
  source: string;
};

export const Markdown = ({ source }: MarkdownProps) => {
  const isMobile = useCheckMobileScreen();

  return <MarkdownStyled source={source} $isMobile={isMobile} />;
};
