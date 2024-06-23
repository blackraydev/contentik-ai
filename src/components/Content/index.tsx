import { Card, TextSkeleton } from '../../UI';
import { useCheckMobileScreen } from '../../hooks';
import { useContentScope } from '../../scopes';
import { Markdown } from '../Markdown';
import { ContentStyled, FullWrapper, Text } from './styled';

const mockContent = `
  Пожалуйста, предоставьте мне больше информации о том, какой текст вы хотите получить на тему "test".

  Например:

  Какая конкретно цель этого текста? Хотите ли вы, чтобы он был информативным, развлекательным, мотивирующим, или, может быть, побуждающим к действию?
  Для какой аудитории вы пишете этот текст? Это студенты, профессионалы, любители, или широкая аудитория?
  Какие ключевые слова должны быть включены в текст?
  Есть ли какие-то ограничения по длине текста?
  Чем больше информации вы мне дадите, тем лучше я смогу выполнить ваше задание и создать действительно полезный и интересный текст.

  Пожалуйста, предоставьте мне больше информации о том, какой текст вы хотите получить на тему "test".

  Например:

  Какая конкретно цель этого текста? Хотите ли вы, чтобы он был информативным, развлекательным, мотивирующим, или, может быть, побуждающим к действию?
  Для какой аудитории вы пишете этот текст? Это студенты, профессионалы, любители, или широкая аудитория?
  Какие ключевые слова должны быть включены в текст?
  Есть ли какие-то ограничения по длине текста?
  Чем больше информации вы мне дадите, тем лучше я смогу выполнить ваше задание и создать действительно полезный и интересный текст.

  Пожалуйста, предоставьте мне больше информации о том, какой текст вы хотите получить на тему "test".

  Например:

  Какая конкретно цель этого текста? Хотите ли вы, чтобы он был информативным, развлекательным, мотивирующим, или, может быть, побуждающим к действию?
  Для какой аудитории вы пишете этот текст? Это студенты, профессионалы, любители, или широкая аудитория?
  Какие ключевые слова должны быть включены в текст?
  Есть ли какие-то ограничения по длине текста?
  Чем больше информации вы мне дадите, тем лучше я смогу выполнить ваше задание и создать действительно полезный и интересный текст.

  Пожалуйста, предоставьте мне больше информации о том, какой текст вы хотите получить на тему "test".

  Например:

  Какая конкретно цель этого текста? Хотите ли вы, чтобы он был информативным, развлекательным, мотивирующим, или, может быть, побуждающим к действию?
  Для какой аудитории вы пишете этот текст? Это студенты, профессионалы, любители, или широкая аудитория?
  Какие ключевые слова должны быть включены в текст?
  Есть ли какие-то ограничения по длине текста?
  Чем больше информации вы мне дадите, тем лучше я смогу выполнить ваше задание и создать действительно полезный и интересный текст.

  Пожалуйста, предоставьте мне больше информации о том, какой текст вы хотите получить на тему "test".

  Например:

  Какая конкретно цель этого текста? Хотите ли вы, чтобы он был информативным, развлекательным, мотивирующим, или, может быть, побуждающим к действию?
  Для какой аудитории вы пишете этот текст? Это студенты, профессионалы, любители, или широкая аудитория?
  Какие ключевые слова должны быть включены в текст?
  Есть ли какие-то ограничения по длине текста?
  Чем больше информации вы мне дадите, тем лучше я смогу выполнить ваше задание и создать действительно полезный и интересный текст.

  Пожалуйста, предоставьте мне больше информации о том, какой текст вы хотите получить на тему "test".

  Например:

  Какая конкретно цель этого текста? Хотите ли вы, чтобы он был информативным, развлекательным, мотивирующим, или, может быть, побуждающим к действию?
  Для какой аудитории вы пишете этот текст? Это студенты, профессионалы, любители, или широкая аудитория?
  Какие ключевые слова должны быть включены в текст?
  Есть ли какие-то ограничения по длине текста?
  Чем больше информации вы мне дадите, тем лучше я смогу выполнить ваше задание и создать действительно полезный и интересный текст.
`;

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
