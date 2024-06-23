import styled from 'styled-components';

export const GenerationViewStyled = styled.div`
  display: flex;
  height: 100%;
  width: 50%;
`;

export const FullWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Text = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primaryFont};
`;
