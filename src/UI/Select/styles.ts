import styled, { css } from 'styled-components';
import { FaChevronDown } from 'react-icons/fa';
import { MdOutlineClear } from 'react-icons/md';

type SelectStyleProps = {
  $isOpen: boolean;
  $isMobile: boolean;
};

export const Label = styled.span`
  transition: 0.2s ease;
  color: ${({ theme }) => theme.colors.primaryFont};
  margin-bottom: 8px;
  z-index: 1;
`;

export const SelectButton = styled.button<{ $isOptionChosen: boolean }>`
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
  border: 1px solid ${({ theme }) => theme.colors.elemBg};

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.borderActive};
  }
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

export const SelectStyled = styled.div<SelectStyleProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  width: 100%;

  ${({ $isOpen, $isMobile }) => css`
    ${OptionsList} {
      opacity: ${$isOpen ? 1 : 0};
      transform: translateY(${$isOpen ? 0 : 10}px);
      visibility: ${!$isOpen && 'hidden'};
      max-height: ${$isMobile ? '150px' : '180px'};
      top: ${$isMobile ? '-135px;' : '-160px'};
    }
    ${ChevronIcon} {
      transform: rotate(${$isOpen ? 180 : 0}deg);
    }
  `}

  ${Label} {
    font-size: ${({ $isMobile }) => ($isMobile ? '14px' : '16px')};
  }
  ${SelectButton} {
    font-size: ${({ $isMobile }) => ($isMobile ? '14px' : '16px')};
  }
  ${OptionItem} {
    font-size: ${({ $isMobile }) => ($isMobile ? '14px' : '16px')};
  }
`;

export const OptionsList = styled.ul`
  width: 100%;
  transition: 0.2s ease;
  z-index: 1000;
  position: absolute;
  left: 0;
  background: ${({ theme }) => theme.colors.elemBg};
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  box-shadow: ${({ theme }) => theme.colors.primaryBoxShadow};
  padding: 5px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ChevronIcon = styled(FaChevronDown)`
  cursor: pointer;
  transition: 0.2s ease;
  color: ${({ theme }) => theme.colors.icon};
`;

export const CrossIcon = styled(MdOutlineClear)`
  cursor: pointer;
  transition: 0.2s ease;
  color: ${({ theme }) => theme.colors.icon};
  margin-right: -2px;
`;
