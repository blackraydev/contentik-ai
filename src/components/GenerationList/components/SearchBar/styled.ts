import styled from 'styled-components';
import { Input, Select } from '../../../../UI';

export const InputStyled = styled(Input)``;

export const SelectStyled = styled(Select)`
  width: fit-content;
`;

export const SearchBarStyled = styled.div<{ $isMobile: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 10px;

  ${SelectStyled} {
    min-width: ${({ $isMobile }) => ($isMobile ? '140px' : '180px')};
  }
`;
