import { createContext, useContext, useEffect, useState } from 'react';
import { Generation, Mode } from '../../types';
import { supabase } from '../../api';

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
});

export const useGenerationsScope = () => useContext(GenerationsContext);

export const GenerationsScope = ({ children }: GenerationsScopeProps) => {
  const [generationList, setGenerationList] = useState<Generation[]>([]);
  const [isGenerationListFetched, setGenerationListFetched] = useState(false);
  const [chosenGeneration, setChosenGeneration] = useState<Generation | null>(null);
  const [searchValue, setSearchValue] = useState('');
  const [chosenMode, setChosenMode] = useState<Mode | null>(null);

  useEffect(() => {
    const generationsInsertChannel = supabase
      .channel('generations-insert-channel')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'generations' },
        ({ new: newGeneration }) => {
          setGenerationList((prev) => [newGeneration as Generation, ...prev]);
        },
      )
      .subscribe();

    const generationsDeleteChannel = supabase
      .channel('generations-delete-channel')
      .on(
        'postgres_changes',
        { event: 'DELETE', schema: 'public', table: 'generations' },
        ({ old: oldGeneration }) => {
          setGenerationList((prev) =>
            prev.filter((generation) => generation.id !== oldGeneration.id),
          );

          if (chosenGeneration?.id === oldGeneration.id) {
            setChosenGeneration(null);
          }
        },
      )
      .subscribe();

    return () => {
      generationsInsertChannel.unsubscribe();
      generationsDeleteChannel.unsubscribe();
    };
  }, []);

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
      }}
    >
      {children}
    </GenerationsContext.Provider>
  );
};
