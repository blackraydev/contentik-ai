import styled from 'styled-components';
import { Input, Select } from '../../../../UI';

export const SearchBarStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
`;

export const InputStyled = styled(Input)``;

export const SelectStyled = styled(Select)`
  min-width: 180px;
  width: 30%;
`;
