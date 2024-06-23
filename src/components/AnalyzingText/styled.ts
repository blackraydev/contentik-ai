import styled from 'styled-components';
import { Button, Textarea } from '../../UI';

export const AnalyzingTextStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 50%;
  height: 100%;
`;

export const TextareaStyled = styled(Textarea)`
  height: 100%;
`;

export const Title = styled.h3`
  transition: 0.2s ease;
  width: 100%;
  text-align: start;
  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primaryFont};
  margin-bottom: 10px;
`;

export const GenerateButton = styled(Button)<{ $isGenerating: boolean }>`
  transition: 0.2s ease;
  border: none;
  outline: none;
  color: #fff;
  background: ${({ theme }) => theme.colors.buttonBg};
  color: ${({ theme, $isGenerating }) =>
    $isGenerating ? theme.colors.white : theme.colors.buttonFont};
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 15px;
  width: 180px;

  circle {
    stroke: ${({ theme }) => theme.colors.white};
  }

  &:before {
    content: '';
    background: linear-gradient(
      -45deg,
      rgb(227, 185, 251),
      rgb(193, 109, 247),
      rgb(126, 106, 239),
      rgb(91, 77, 236)
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400% 400%;
    z-index: -1;
    filter: ${({ $isGenerating }) => ($isGenerating ? 'none' : 'blur(10px)')};
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 10s ease infinite;
    transition: 0.2s ease;
    border-radius: 15px;
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
    left: 0;
    top: 0;
    border-radius: 15px;
    background: ${({ theme, $isGenerating }) =>
      $isGenerating ? 'transparent' : theme.colors.buttonBg};
  }

  @keyframes glowing {
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }
`;
