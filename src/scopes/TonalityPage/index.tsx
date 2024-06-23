import { createContext, useContext, useState } from 'react';

type TonalityScopeProps = {
  children: React.ReactNode;
};

type TonalityContextType = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  analyzedText: string;
  setAnalyzedText: React.Dispatch<React.SetStateAction<string>>;
  isAnalyzing: boolean;
  setIsAnalyzing: React.Dispatch<React.SetStateAction<boolean>>;
};

const TonalityContext = createContext<TonalityContextType>({
  text: '',
  setText: () => {},
  analyzedText: '',
  setAnalyzedText: () => {},
  isAnalyzing: false,
  setIsAnalyzing: () => {},
});

export const useTonalityScope = () => useContext(TonalityContext);

export const TonalityScope = ({ children }: TonalityScopeProps) => {
  const [text, setText] = useState('');
  const [analyzedText, setAnalyzedText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  return (
    <TonalityContext.Provider
      value={{
        text,
        setText,
        analyzedText,
        setAnalyzedText,
        isAnalyzing,
        setIsAnalyzing,
      }}
    >
      {children}
    </TonalityContext.Provider>
  );
};
