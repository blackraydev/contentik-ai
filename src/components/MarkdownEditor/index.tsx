import { Editor, EditorProvider } from 'react-simple-wysiwyg';
import { MarkdownEditorStyled } from './styled';

type MarkdownEditorProps = {
  value: string;
  onChange: (text: string) => void;
};

export const MarkdownEditor = ({ value, onChange }: MarkdownEditorProps) => {
  return (
    <MarkdownEditorStyled>
      <EditorProvider>
        <Editor value={value} onChange={(e) => onChange(e.target.value)} />
      </EditorProvider>
    </MarkdownEditorStyled>
  );
};
