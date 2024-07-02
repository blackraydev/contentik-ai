import { useState } from 'react';
import {
  ChevronIcon,
  CrossIcon,
  Label,
  OptionItem,
  OptionsList,
  SelectButton,
  SelectStyled,
} from './styles';
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
};

export const Select = ({
  options,
  value,
  onChange,
  placeholder,
  label,
  withClear = false,
  className,
}: SelectProps) => {
  const { isMobile } = useCheckScreenType();
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
    <SelectStyled
      onBlur={handleSelectBlur}
      className={className}
      $isOpen={isOpen}
      $isMobile={isMobile}
    >
      <Label>{label}</Label>
      <SelectButton onClick={() => setIsOpen(!isOpen)} $isOptionChosen={Boolean(chosenOption)}>
        {chosenOptionLabel || placeholder}
        {Boolean(chosenOption) && withClear ? (
          <CrossIcon onClick={handleOptionClear} size={20} />
        ) : (
          <ChevronIcon />
        )}
      </SelectButton>
      <OptionsList>
        {options.map((option) => (
          <OptionItem key={option.value} onClick={() => handleOptionClick(option.value)}>
            {option.label}
          </OptionItem>
        ))}
      </OptionsList>
    </SelectStyled>
  );
};
