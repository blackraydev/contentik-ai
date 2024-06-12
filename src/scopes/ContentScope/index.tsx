import { createContext, useContext, useState } from 'react';

type ContentScopeProps = {
  children: React.ReactNode;
};

type ContentContextType = {
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
};

const ContentContext = createContext<ContentContextType>({
  content: '',
  setContent: () => {},
});

export const useContentScope = () => useContext(ContentContext);

export const ContentScope = ({ children }: ContentScopeProps) => {
  const [content, setContent] = useState('');

  return (
    <ContentContext.Provider value={{ content, setContent }}>{children}</ContentContext.Provider>
  );
};
