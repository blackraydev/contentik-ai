import styled, { css } from 'styled-components';
import { FaChevronDown } from 'react-icons/fa';
import { MdOutlineClear } from 'react-icons/md';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { Input } from '../Input';

type SelectStyleProps = {
  $isOpen: boolean;
  $isMobile: boolean;
};

export const SearchInputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Label = styled.span`
  transition: 0.2s ease;
  color: ${({ theme }) => theme.colors.primaryFont};
`;

export const SearchInput = styled(Input)<{ $isOptionChosen: boolean }>`
  transition: 0.2s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
  background: ${({ theme }) => theme.colors.elemBg};
  color: ${({ theme, $isOptionChosen }) =>
    $isOptionChosen ? theme.colors.primaryFont : theme.colors.secondaryFont};
  padding: 16px 15px;
  cursor: pointer;
  gap: 6px;
  width: 100%;
  height: 48px;
  padding-right: 35px;

  &:hover {
    background: ${({ theme }) => theme.colors.inputHover};
  }
`;

export const OptionItem = styled.li`
  width: 100%;
  cursor: pointer;
  padding: 10px 15px;
  background: ${({ theme }) => theme.colors.elemBg};
  color: ${({ theme }) => theme.colors.primaryFont};
  border-radius: 15px;

  &:hover {
    background: ${({ theme }) => theme.colors.secondaryBg};
  }
`;

export const SearchSelectStyled = styled.div<SelectStyleProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  width: 100%;

  ${({ $isOpen, $isMobile }) => css`
    ${OptionsList} {
      opacity: ${$isOpen ? 1 : 0};
      transform: translateY(${$isOpen ? 10 : 0}px);
      visibility: ${!$isOpen && 'hidden'};
      max-height: ${$isMobile ? '150px' : '180px'};
    }
    ${ChevronIcon} {
      transform: rotate(${$isOpen ? 180 : 0}deg);
    }
  `}

  ${Label} {
    font-size: ${({ $isMobile }) => ($isMobile ? '14px' : '16px')};
  }
  ${SearchInput} {
    font-size: ${({ $isMobile }) => ($isMobile ? '14px' : '16px')};
  }
  ${OptionItem} {
    font-size: ${({ $isMobile }) => ($isMobile ? '14px' : '16px')};
    padding: ${({ $isMobile }) => ($isMobile ? '10px' : '10px 15px')};
  }
  ${SearchInputWrapper} {
    font-size: ${({ $isMobile }) => ($isMobile ? '14px' : '16px')};
  }
`;

export const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 8px;
`;

export const LabelWrapperLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ExceedingText = styled.span`
  transition: 0.2s ease;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.secondaryFont};
  padding-right: 5px;
`;

export const OptionsList = styled.ul`
  width: 100%;
  transition: 0.2s ease;
  z-index: 1000;
  position: absolute;
  top: 100%;
  left: 0;
  background: ${({ theme }) => theme.colors.elemBg};
  border-radius: 15px;
  overflow-y: scroll;
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  box-shadow: ${({ theme }) => theme.colors.primaryBoxShadow};
  padding: 5px;
  max-height: 207px;

  &::-webkit-scrollbar {
    display: none;
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
