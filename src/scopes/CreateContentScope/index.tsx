import { createContext, useContext, useState } from 'react';
import { languages } from '../../consts';

type CreateContentScopeProps = {
  children: React.ReactNode;
};

type CreateContentContextType = {
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  isGenerating: boolean;
  setGenerating: React.Dispatch<React.SetStateAction<boolean>>;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  topic: string;
  setTopic: React.Dispatch<React.SetStateAction<string>>;
  contentType: string;
  setContentType: React.Dispatch<React.SetStateAction<string>>;
  targetAudience: string;
  setTargetAudience: React.Dispatch<React.SetStateAction<string>>;
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
};

const CreateContentContext = createContext<CreateContentContextType>({
  content: '',
  setContent: () => {},
  isGenerating: false,
  setGenerating: () => {},
  text: '',
  setText: () => {},
  topic: '',
  setTopic: () => {},
  contentType: '',
  setContentType: () => {},
  targetAudience: '',
  setTargetAudience: () => {},
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
});

export const useCreateContentScope = () => useContext(CreateContentContext);

export const CreateContentScope = ({ children }: CreateContentScopeProps) => {
  const [content, setContent] = useState('');
  const [isGenerating, setGenerating] = useState(false);
  const [text, setText] = useState('');
  const [topic, setTopic] = useState('');
  const [contentType, setContentType] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [description, setDescription] = useState('');
  const [keywords, setKeywords] = useState('');
  const [style, setStyle] = useState('');
  const [tone, setTone] = useState('');
  const [language, setLanguage] = useState(languages[0].value);

  return (
    <CreateContentContext.Provider
      value={{
        content,
        setContent,
        isGenerating,
        setGenerating,
        text,
        setText,
        topic,
        setTopic,
        contentType,
        setContentType,
        targetAudience,
        setTargetAudience,
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
      }}
    >
      {children}
    </CreateContentContext.Provider>
  );
};
