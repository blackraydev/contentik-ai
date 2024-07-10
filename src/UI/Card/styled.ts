import styled from 'styled-components';

export const CardStyled = styled.div<{ $padding?: string }>`
  transition: 0.2s ease;
  width: 100%;
  height: fit-content;
  background: ${({ theme }) => theme.colors.primaryBg};
  box-shadow: ${({ theme }) => theme.colors.primaryBoxShadow};
  border-radius: 1.5rem;
  padding: ${({ $padding }) => $padding ?? '25px'};
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
