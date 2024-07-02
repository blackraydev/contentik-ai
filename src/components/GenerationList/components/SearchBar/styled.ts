import styled from 'styled-components';
import { Input, Select } from '../../../../UI';

export const InputStyled = styled(Input)``;

export const SelectStyled = styled(Select)`
  min-width: 180px;
  width: 30%;
`;

export const SearchBarStyled = styled.div<{ $isMobile: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 10px;

  ${SelectStyled} {
    min-width: ${({ $isMobile }) => ($isMobile ? '145px' : '180px')};
  }
`;
