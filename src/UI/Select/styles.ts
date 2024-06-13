import styled, { css } from 'styled-components';
import { FaChevronDown } from 'react-icons/fa';
import { MdOutlineClear } from 'react-icons/md';

type SelectStyleProps = {
  $isOpen: boolean;
};

export const SelectStyled = styled.div<SelectStyleProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;

  ${({ $isOpen }) => css`
    ${OptionsList} {
      opacity: ${$isOpen ? 1 : 0};
      transform: translateY(${$isOpen ? 10 : 0}px);
      visibility: ${!$isOpen && 'hidden'};
    }
    ${ChevronIcon} {
      transform: rotate(${$isOpen ? 180 : 0}deg);
    }
  `}
`;

export const Label = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primaryText};
  margin-bottom: 8px;
  margin-left: 15px;
`;

export const SelectButton = styled.button<{ $isOptionChosen: boolean }>`
  transition: 0.2s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme, $isOptionChosen }) =>
    $isOptionChosen ? theme.colors.primaryText : theme.colors.gray};
  font-size: 16px;
  padding: 16px 15px;
  cursor: pointer;
  gap: 6px;
  width: 100%;
  height: 48px;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
  }
`;

export const OptionsList = styled.ul`
  width: 100%;
  transition: 0.2s ease;
  z-index: 1000;
  position: absolute;
  top: 100%;
  left: 0;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0px 0px 5px 1px ${({ theme }) => theme.colors.main};
`;

export const OptionItem = styled.li`
  width: 100%;
  cursor: pointer;
  padding: 10px 15px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primaryText};

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
  }
`;

export const ChevronIcon = styled(FaChevronDown)`
  transition: 0.2s ease;
  color: ${({ theme }) => theme.colors.gray};

  &:hover {
    color: ${({ theme }) => theme.colors.primaryText};
  }
`;

export const CrossIcon = styled(MdOutlineClear)`
  transition: 0.2s ease;
  color: ${({ theme }) => theme.colors.gray};
  margin-right: -2px;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryText};
  }
`;
