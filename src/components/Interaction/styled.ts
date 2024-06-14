import styled from 'styled-components';
import { Select, Textarea } from '../../UI';

export const InteractionStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  gap: 10px;
`;

export const SelectStyled = styled(Select)`
  width: 100%;
`;

export const TextareaStyled = styled(Textarea)`
  height: 245px;
`;
