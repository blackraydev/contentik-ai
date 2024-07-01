import styled from 'styled-components';
import { IoFlash } from 'react-icons/io5';
import { Button } from '../../../../UI';

export const LimitsStyled = styled.div`
  transition: 0.2s ease;
  display: flex;
  border: none;
  outline: none;
  position: relative;
  z-index: 0;
  height: 250px;
  border-radius: 15px;

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

export const TariffTitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: -10px;
`;

export const TariffPlan = styled.p`
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
`;

export const LimitsWrapper = styled.div`
  transition: 0.2s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  width: 100%;
  height: 100%;
`;

export const LimitsIcon = styled(IoFlash)`
  width: 40px;
  height: 40px;
  transition: 0.2s ease;
  color: rgb(225, 225, 0);
`;

export const LimitsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  text-align: center;
  width: 100%;
`;

export const LimitsBody = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: -5px;
`;

export const LimitsText = styled.div`
  transition: 0.2s ease;
  color: ${({ theme }) => theme.colors.white};
  font-size: 32px;
  font-weight: 500;
  width: 100%;
  text-align: start;
`;

export const ButtonStyled = styled(Button)`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};

  &:hover {
    background: rgb(236, 236, 238);
    color: ${({ theme }) => theme.colors.black};
  }
`;
