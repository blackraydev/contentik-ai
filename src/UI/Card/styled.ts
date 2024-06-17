import styled from 'styled-components';

export const CardStyled = styled.div<{ $width: string }>`
  transition: 0.2s ease;
  width: ${({ $width }) => $width};
  background: ${({ theme }) => theme.colors.card};
  border-radius: 15px;
  box-shadow: 0px 0px 3px 1px ${({ theme }) => theme.colors.boxShadow};
`;

export const ChildrenStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  gap: 10px;
`;
