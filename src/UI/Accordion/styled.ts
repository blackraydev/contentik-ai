import styled from 'styled-components';
import { FaChevronDown } from 'react-icons/fa';

export const AccordionStyled = styled.div`
  transition: 0.2s ease;
  width: 100%;
  height: fit-content;
  background: ${({ theme }) => theme.colors.primaryBg};
  box-shadow: ${({ theme }) => theme.colors.primaryBoxShadow};
  border-radius: 1.5rem;
  padding: 25px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 24px;
  cursor: pointer;
  border-radius: 15px;
`;

export const Title = styled.h3`
  transition: 0.2s ease;
  width: 100%;
  text-align: start;
  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primaryFont};
`;

export const ChevronIcon = styled(FaChevronDown)<{ $open: boolean }>`
  transition: 0.2s ease;
  width: 18px;
  height: 18px;
  color: ${({ theme }) => theme.colors.primaryFont};
  transform: rotate(${({ $open }) => ($open ? '180deg' : '0')});
`;

export const ChildrenStyled = styled.div<{ $open: boolean; $width: string; $height: string }>`
  pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};
  transition: all 0.2s ease, opacity 0s;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  width: ${({ $width }) => $width};
  height: ${({ $height, $open }) => ($open ? $height : '0')};
  margin-top: ${({ $open }) => ($open ? '20px' : '0')};
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transform: translateY(${({ $open }) => ($open ? '0' : '10px')});
`;
