import styled from 'styled-components';

export const LoaderStyled = styled.div`
  position: relative;
  width: 20px;
  z-index: 1000;

  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }
`;

export const Circular = styled.svg`
  animation: rotate 2s linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Path = styled.circle`
  transition: 0.2s ease;
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  animation: dash 1.5s ease-in-out infinite;
  stroke: ${({ theme }) => theme.colors.buttonIcon};
  stroke-linecap: round;
  stroke-width: 4;
  fill: none;

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -35px;
    }

    100% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -124px;
    }
  }
`;
