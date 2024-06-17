import styled from 'styled-components';

export const CardStyled = styled.div`
  transition: 0.2s ease;
  width: fit-content;
  height: fit-content;
  background: ${({ theme }) => theme.colors.primaryBg};
  border-radius: 0.75rem;
`;

export const ChildrenStyled = styled.div<{ $width: string; $height: string }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
`;
