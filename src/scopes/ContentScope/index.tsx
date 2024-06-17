import { createContext, useContext, useState } from 'react';

type ContentScopeProps = {
  children: React.ReactNode;
};

type ContentContextType = {
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  contentDisplayed: boolean;
  setContentDisplayed: React.Dispatch<React.SetStateAction<boolean>>;
};

const ContentContext = createContext<ContentContextType>({
  content: '',
  setContent: () => {},
  contentDisplayed: false,
  setContentDisplayed: () => {},
});

export const useContentScope = () => useContext(ContentContext);

export const ContentScope = ({ children }: ContentScopeProps) => {
  const [content, setContent] = useState('');
  const [contentDisplayed, setContentDisplayed] = useState(false);

  return (
    <ContentContext.Provider value={{ content, setContent, contentDisplayed, setContentDisplayed }}>
      {children}
    </ContentContext.Provider>
  );
};
