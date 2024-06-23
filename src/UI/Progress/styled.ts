import styled from 'styled-components';

export const ProgressStyled = styled.div<{ $width?: string; $progress?: number }>`
  transition: 0.2s ease;
  width: ${({ $width = '100%' }) => $width};
  height: 8px;
  background: ${({ theme }) => theme.colors.black};
  border-radius: 15px;
  margin-bottom: 15px;

  &::before {
    transition: 0.2s ease;
    content: '';
    display: block;
    width: ${({ $progress = 0 }) => `${$progress}%`};
    height: 100%;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 15px;
  }
`;
