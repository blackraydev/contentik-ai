import styled from 'styled-components';

export const TextSkeletonStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px;
`;

export const TextSkeletonText = styled.div<{ width?: number }>`
  transition: 0.2s ease;
  animation: textAnimation 2s infinite ease;
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  height: 20px;
  width: ${({ width = '100' }) => `${width}%`};
  border-radius: 15px;

  @keyframes textAnimation {
    0% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }
`;
