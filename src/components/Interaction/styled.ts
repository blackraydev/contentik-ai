import styled from 'styled-components';
import { Button, Select, Textarea } from '../../UI';

export const InteractionStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  gap: 10px;
`;

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

export const GenerateButton = styled(Button)<{ $isGenerating: boolean }>`
  border: none;
  outline: none;
  color: #fff;
  background: ${({ theme }) => theme.colors.buttonBg};
  color: ${({ theme, $isGenerating }) =>
    $isGenerating ? theme.colors.white : theme.colors.buttonFont};
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 0.75rem;

  circle {
    stroke: ${({ theme }) => theme.colors.white};
  }

  &:before {
    content: '';
    background: linear-gradient(
      45deg,
      rgb(126, 106, 239),
      rgb(227, 185, 251),
      rgb(91, 77, 236),
      rgb(244, 195, 246),
      rgb(193, 109, 247)
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    transition: opacity 0.2s ease-in-out;
    border-radius: 0.75rem;
    opacity: ${({ $isGenerating }) => ($isGenerating ? 1 : 0)};
  }

  &:hover:before {
    opacity: 1;
  }

  &:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.buttonBg};
    left: 0;
    top: 0;
    border-radius: 0.75rem;
    background: ${({ $isGenerating }) => $isGenerating && 'transparent'};
  }

  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
`;
