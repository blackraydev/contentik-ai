import styled, { css } from 'styled-components';
import { FaChevronDown } from 'react-icons/fa';
import { MdOutlineClear } from 'react-icons/md';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { Input } from '../Input';

type SelectStyleProps = {
  $isOpen: boolean;
};

export const SearchSelectStyled = styled.div<SelectStyleProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  width: 100%;

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

export const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;
  margin: 8px 0;
`;

export const Label = styled.span`
  transition: 0.2s ease;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primaryFont};
`;

export const SearchInputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const SearchInput = styled(Input)<{ $isOptionChosen: boolean }>`
  transition: 0.2s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
  background: ${({ theme }) => theme.colors.primaryBg};
  color: ${({ theme, $isOptionChosen }) =>
    $isOptionChosen ? theme.colors.primaryFont : theme.colors.secondaryFont};
  font-size: 16px;
  padding: 16px 15px;
  cursor: pointer;
  gap: 6px;
  width: 100%;
  height: 48px;

  &:hover {
    background: ${({ theme }) => theme.colors.inputHover};
  }
`;

export const OptionsList = styled.ul`
  width: 100%;
  transition: 0.2s ease;
  z-index: 1000;
  position: absolute;
  top: 100%;
  left: 0;
  background: ${({ theme }) => theme.colors.primaryBg};
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  box-shadow: ${({ theme }) => theme.colors.primaryBoxShadow};
  padding: 5px;
`;

export const OptionItem = styled.li`
  width: 100%;
  cursor: pointer;
  padding: 10px 15px;
  background: ${({ theme }) => theme.colors.primaryBg};
  color: ${({ theme }) => theme.colors.primaryFont};
  border-radius: 15px;

  &:hover {
    background: ${({ theme }) => theme.colors.secondaryBg};
  }
`;

export const ChevronIcon = styled(FaChevronDown)`
  cursor: pointer;
  position: absolute;
  right: 15px;
  top: 18px;
  transition: 0.2s ease;
  color: ${({ theme }) => theme.colors.icon};
`;

export const CrossIcon = styled(MdOutlineClear)`
  cursor: pointer;
  position: absolute;
  right: 15px;
  top: 16px;
  transition: 0.2s ease;
  color: ${({ theme }) => theme.colors.icon};
  margin-right: -2px;
`;

export const InfoIcon = styled(AiOutlineInfoCircle)`
  cursor: pointer;
  transition: 0.2s ease;
  color: ${({ theme }) => theme.colors.secondaryFont};
  margin-top: 1px;
`;
