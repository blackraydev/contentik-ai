import styled from 'styled-components';

export const CardStyled = styled.div<{ $padding?: string }>`
  transition: 0.2s ease;
  width: 100%;
  height: fit-content;
  background: ${({ theme }) => theme.colors.primaryBg};
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  box-shadow: ${({ theme }) => theme.colors.primaryBoxShadow};
  padding: 20px;
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
