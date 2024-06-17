import { useState } from 'react';
import {
  ChevronIcon,
  CrossIcon,
  InfoIcon,
  Label,
  LabelWrapper,
  OptionItem,
  OptionsList,
  SearchInputWrapper,
  SearchSelectStyled,
} from './styled';
import { SearchInput } from './styled';
import { Tooltip } from '../Tooltip';

type SelectOption = {
  value: string;
  label: string;
};

type SelectProps = {
  value: string;
  options: SelectOption[];
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  withClear?: boolean;
  className?: string;
};

export const SearchSelect = ({
  options,
  value,
  onChange,
  placeholder,
  label,
  withClear = false,
  className,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const chosenOption = options.find((option) => option.value === value);
  const chosenOptionLabel = chosenOption?.label;

  const handleOptionClick = (selectedValue: string) => {
    setIsOpen(false);
    onChange(selectedValue);
  };

  const handleSelectBlur = () => {
    setIsOpen(false);
  };

  const handleOptionClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(false);
    onChange('');
  };

  return (
    <SearchSelectStyled onBlur={handleSelectBlur} className={className} $isOpen={isOpen}>
      <LabelWrapper>
        <Label>{label}</Label>
        <Tooltip width={230} content="Можно указать свой вариант или выбрать из предложенных" offset={50}>
          <InfoIcon />
        </Tooltip>
      </LabelWrapper>
      <SearchInputWrapper>
        <SearchInput
          onClick={() => setIsOpen(!isOpen)}
          onChange={(e) => onChange(e.target.value)}
          value={chosenOption ? chosenOptionLabel : value}
          placeholder={placeholder}
          $isOptionChosen={Boolean(value)}
        />
        {Boolean(value) && withClear ? (
          <CrossIcon onClick={handleOptionClear} size={20} />
        ) : (
          <ChevronIcon />
        )}
      </SearchInputWrapper>
      <OptionsList>
        {options.map((option) => (
          <OptionItem key={option.value} onClick={() => handleOptionClick(option.value)}>
            {option.label}
          </OptionItem>
        ))}
      </OptionsList>
    </SearchSelectStyled>
  );
};
