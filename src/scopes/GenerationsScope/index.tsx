import { createContext, useContext, useState } from 'react';
import { Generation, Mode } from '../../types';
import { ContentService } from '../../api';
import { useUserScope } from '../UserScope';

type GenerationsScopeProps = {
  children: React.ReactNode;
};

type GenerationsContextType = {
  generationList: Generation[];
  setGenerationList: React.Dispatch<React.SetStateAction<Generation[]>>;
  isGenerationListFetched: boolean;
  setGenerationListFetched: React.Dispatch<React.SetStateAction<boolean>>;
  chosenGeneration: Generation | null;
  setChosenGeneration: React.Dispatch<React.SetStateAction<Generation | null>>;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  chosenMode: Mode | null;
  setChosenMode: React.Dispatch<React.SetStateAction<Mode | null>>;
  mobileView: 'history' | 'content';
  setMobileView: React.Dispatch<React.SetStateAction<'history' | 'content'>>;
  fetchGenerationList: () => Promise<void>;
};

const GenerationsContext = createContext<GenerationsContextType>({
  generationList: [],
  setGenerationList: () => {},
  isGenerationListFetched: false,
  setGenerationListFetched: () => {},
  chosenGeneration: null,
  setChosenGeneration: () => {},
  searchValue: '',
  setSearchValue: () => {},
  chosenMode: null,
  setChosenMode: () => {},
  mobileView: 'history',
  setMobileView: () => {},
  fetchGenerationList: async () => {},
});

export const useGenerationsScope = () => useContext(GenerationsContext);

export const GenerationsScope = ({ children }: GenerationsScopeProps) => {
  const { user } = useUserScope();
  const [generationList, setGenerationList] = useState<Generation[]>([]);
  const [isGenerationListFetched, setGenerationListFetched] = useState(false);
  const [chosenGeneration, setChosenGeneration] = useState<Generation | null>(null);
  const [searchValue, setSearchValue] = useState('');
  const [chosenMode, setChosenMode] = useState<Mode | null>(null);
  const [mobileView, setMobileView] = useState<'history' | 'content'>('history');

  const fetchGenerationList = async () => {
    try {
      const userId = user?.id;

      if (userId) {
        const { data: generations } = await ContentService.getContents();
        setGenerationList(generations);
      }
    } finally {
      setGenerationListFetched(true);
    }
  };

  return (
    <GenerationsContext.Provider
      value={{
        generationList,
        setGenerationList,
        isGenerationListFetched,
        setGenerationListFetched,
        chosenGeneration,
        setChosenGeneration,
        searchValue,
        setSearchValue,
        chosenMode,
        setChosenMode,
        mobileView,
        setMobileView,
        fetchGenerationList,
      }}
    >
      {children}
    </GenerationsContext.Provider>
  );
};
