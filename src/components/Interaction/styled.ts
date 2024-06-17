import styled from 'styled-components';
import { Select, Textarea } from '../../UI';

export const SelectStyled = styled(Select)`
  width: 100%;
`;

export const TextareaStyled = styled(Textarea)`
  height: 245px;
`;

export const PhotosWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;
  flex-wrap: nowrap;
  align-items: center;
`;
