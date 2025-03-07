import styled from 'styled-components';
import { IoFlash } from 'react-icons/io5';
import { Button, Loader } from '../../../../UI';
import { FaWandMagicSparkles } from 'react-icons/fa6';
import { FaPen } from 'react-icons/fa';

export const LimitsButtonMobile = styled(Button)`
  transition: 0.2s ease;
  border: none;
  outline: none;
  color: #fff;
  background: ${({ theme }) => theme.colors.buttonBg};
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  width: unset;
  padding: 10px;
  margin-bottom: 25px;

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
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 10s ease infinite;
    transition: 0.2s ease;
    border-radius: 10px;
    opacity: 1;
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
    background: transparent;
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

export const LimitsIconMobile = styled(IoFlash)`
  width: 16px;
  height: 16px;
  transition: 0.2s ease;
  color: rgb(225, 225, 0);
`;

export const LimitsStyled = styled.div`
  transition: 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  position: relative;
  z-index: 0;
  height: 300px;
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
  margin-bottom: -5px;
`;

export const TariffPlan = styled.p`
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 10px;
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
  gap: 12px;
`;

export const LimitsText = styled.div`
  transition: 0.2s ease;
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
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

export const MagicIcon = styled(FaWandMagicSparkles)`
  transition: 0.2s ease;
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.colors.white};
`;

export const PenIcon = styled(FaPen)`
  transition: 0.2s ease;
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.colors.white};
`;

export const LimitsLoader = styled(Loader)`
  width: 40px;
  height: 40px;

  circle {
    stroke: ${({ theme }) => theme.colors.white};
  }
`;
