import { useRef, useState } from 'react';
import {
  ChevronIcon,
  CrossIcon,
  ExceedingText,
  InfoIcon,
  Label,
  LabelWrapper,
  LabelWrapperLeft,
  OptionItem,
  OptionsList,
  SearchInputWrapper,
  SearchSelectStyled,
} from './styled';
import { SearchInput } from './styled';
import { Tooltip } from '../Tooltip';
import { useCheckScreenType } from '../../hooks';

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
  maxLength?: number;
};

export const SearchSelect = ({
  options,
  value,
  onChange,
  placeholder,
  label,
  withClear = false,
  className,
  maxLength,
}: SelectProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { isMobile } = useCheckScreenType();
  const [isOpen, setIsOpen] = useState(false);

  const chosenOption = options.find((option) => option.value === value);
  const chosenOptionLabel = chosenOption?.label;

  const currentLength = value?.toString().length ?? 0;
  const lengthExceeding = maxLength ? maxLength - currentLength < 50 : false;

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
    <SearchSelectStyled
      onBlur={handleSelectBlur}
      className={className}
      $isOpen={isOpen}
      $isMobile={isMobile}
    >
      <LabelWrapper>
        <LabelWrapperLeft>
          <Label>{label}</Label>
          <Tooltip
            width={230}
            content="Можно указать свой вариант или выбрать из предложенных"
            offsetVertical={50}
          >
            <InfoIcon />
          </Tooltip>
        </LabelWrapperLeft>
        {lengthExceeding && (
          <ExceedingText>
            {currentLength} / {maxLength}
          </ExceedingText>
        )}
      </LabelWrapper>
      <SearchInputWrapper
        onClick={() => {
          setIsOpen(!isOpen);
          inputRef.current?.focus();
        }}
      >
        <SearchInput
          ref={inputRef}
          onChange={(e) => onChange(e.target.value)}
          value={chosenOption ? chosenOptionLabel : value}
          placeholder={placeholder}
          $isOptionChosen={Boolean(value)}
          maxLength={maxLength}
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
