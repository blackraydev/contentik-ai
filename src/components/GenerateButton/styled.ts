import styled from 'styled-components';
import { Button } from '../../UI';

export const GenerateButtonStyled = styled(Button)`
  margin: 0;
  height: 50px;
  transition: 0.2s ease;
  width: fit-content;
  display: flex;
  border: none;
  outline: none;
  position: relative;
  z-index: 0;
  border-radius: 15px;
  color: ${({ theme }) => theme.colors.white};

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
    background-size: 400% 400%;
    z-index: -1;
    width: 100%;
    height: 100%;
    animation: glowing 10s ease infinite;
    transition: opacity 0.2s ease-out;
    border-radius: 15px;
    opacity: 1;
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
