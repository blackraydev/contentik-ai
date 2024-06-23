import { createContext, useContext, useState } from 'react';
import { Mode } from '../../types';
import { languages, modes } from '../../consts';

type ContentScopeProps = {
  children: React.ReactNode;
};

type ContentContextType = {
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  isGenerating: boolean;
  setGenerating: React.Dispatch<React.SetStateAction<boolean>>;
  mode: Mode;
  setMode: React.Dispatch<React.SetStateAction<Mode>>;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  topic: string;
  setTopic: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  keywords: string;
  setKeywords: React.Dispatch<React.SetStateAction<string>>;
  style: string;
  setStyle: React.Dispatch<React.SetStateAction<string>>;
  tone: string;
  setTone: React.Dispatch<React.SetStateAction<string>>;
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  photos: File[];
  setPhotos: React.Dispatch<React.SetStateAction<File[]>>;
};

const ContentContext = createContext<ContentContextType>({
  content: '',
  setContent: () => {},
  isGenerating: false,
  setGenerating: () => {},
  mode: modes[0].value,
  setMode: () => {},
  text: '',
  setText: () => {},
  topic: '',
  setTopic: () => {},
  description: '',
  setDescription: () => {},
  keywords: '',
  setKeywords: () => {},
  style: '',
  setStyle: () => {},
  tone: '',
  setTone: () => {},
  language: languages[0].value,
  setLanguage: () => {},
  photos: [],
  setPhotos: () => {},
});

export const useContentScope = () => useContext(ContentContext);

export const ContentScope = ({ children }: ContentScopeProps) => {
  const [content, setContent] = useState('');
  const [isGenerating, setGenerating] = useState(false);
  const [mode, setMode] = useState<Mode>(modes[0].value);
  const [text, setText] = useState('');
  const [topic, setTopic] = useState('');
  const [description, setDescription] = useState('');
  const [keywords, setKeywords] = useState('');
  const [photos, setPhotos] = useState<File[]>([]);
  const [style, setStyle] = useState('');
  const [tone, setTone] = useState('');
  const [language, setLanguage] = useState(languages[0].value);

  return (
    <ContentContext.Provider
      value={{
        content,
        setContent,
        isGenerating,
        setGenerating,
        mode,
        setMode,
        text,
        setText,
        topic,
        setTopic,
        description,
        setDescription,
        keywords,
        setKeywords,
        style,
        setStyle,
        tone,
        setTone,
        language,
        setLanguage,
        photos,
        setPhotos,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};
