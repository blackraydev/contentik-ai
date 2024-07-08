import { historyModes } from '../../../../consts';
import { useCheckScreenType } from '../../../../hooks';
import { useGenerationsScope } from '../../../../scopes';
import { Mode } from '../../../../types';
import { InputStyled, SearchBarStyled, SelectStyled } from './styled';

export const SearchBar = () => {
  const { isMobile } = useCheckScreenType();
  const { searchValue, setSearchValue, chosenMode, setChosenMode } = useGenerationsScope();

  return (
    <SearchBarStyled $isMobile={isMobile}>
      <InputStyled
        label="Поиск"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Поиск по теме, описанию, типу контента, целевой аудитории, ключевым словам, стилю письма, тону и языку"
      />
      <SelectStyled
        label="Способ генерации"
        placeholder="Способ"
        value={chosenMode ? chosenMode : ''}
        onChange={(value) => setChosenMode(value as Mode)}
        options={historyModes}
        withClear
      />
    </SearchBarStyled>
  );
};
