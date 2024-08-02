import { useState } from 'react';
import { useCheckScreenType } from '../../hooks';
import { Tooltip } from '../../UI';
import { useToastsScope } from '../../scopes';
import {
  CopyFormattedIcon,
  CopyIcon,
  CopyWrapper,
  MarkdownStyled,
  MarkdownWrapper,
} from './styled';

type MarkdownProps = {
  source: string;
};

export const Markdown = ({ source }: MarkdownProps) => {
  const [showCopy, setShowCopy] = useState(false);
  const { showToast } = useToastsScope();
  const { isMobile } = useCheckScreenType();

  const handleMouseEnter = () => {
    setShowCopy(true);
  };

  const handleMouseLeave = () => {
    setShowCopy(false);
  };

  const handleCopy = async () => {
    try {
      const text = document.querySelector('.wmde-markdown')?.textContent ?? '';
      await navigator.clipboard.writeText(text);
      showToast('Текст скопирован', 'success');
    } catch (e) {
      console.error(e);
    }
  };

  const handleCopyFormatted = async () => {
    try {
      await navigator.clipboard.writeText(source);
      showToast('Форматированный текст скопирован', 'success');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <MarkdownWrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <MarkdownStyled source={source} $isMobile={isMobile} />
      {showCopy && (
        <CopyWrapper>
          <Tooltip position="bottom" width={125} content="Скопировать" offsetVertical={45}>
            <CopyIcon onClick={handleCopy} />
          </Tooltip>
          <Tooltip
            position="bottom"
            width={175}
            content="Скопировать с форматированием"
            offsetVertical={60}
            offsetHorizontal={90}
          >
            <CopyFormattedIcon onClick={handleCopyFormatted} />
          </Tooltip>
        </CopyWrapper>
      )}
    </MarkdownWrapper>
  );
};
