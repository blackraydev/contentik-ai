import { createContext, useContext, useState } from 'react';

type OptimizationScopeProps = {
  children: React.ReactNode;
};

type OptimizationContextType = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  analyzedText: string;
  setAnalyzedText: React.Dispatch<React.SetStateAction<string>>;
  isAnalyzing: boolean;
  setIsAnalyzing: React.Dispatch<React.SetStateAction<boolean>>;
};

const OptimizationContext = createContext<OptimizationContextType>({
  text: '',
  setText: () => {},
  analyzedText: '',
  setAnalyzedText: () => {},
  isAnalyzing: false,
  setIsAnalyzing: () => {},
});

export const useOptimizationScope = () => useContext(OptimizationContext);

export const OptimizationScope = ({ children }: OptimizationScopeProps) => {
  const [text, setText] = useState('');
  const [analyzedText, setAnalyzedText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  return (
    <OptimizationContext.Provider
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
    </OptimizationContext.Provider>
  );
};
