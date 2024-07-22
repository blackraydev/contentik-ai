import styled from 'styled-components';
import { GrPrevious, GrNext } from 'react-icons/gr';
import { FaWandMagicSparkles, FaListUl, FaPen } from 'react-icons/fa6';
import { IoMdSettings } from 'react-icons/io';
import { Button } from '../../UI';

export const FeaturesStyled = styled.div<{ $step: number }>`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export const FeaturesCarousel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  animation: feature-slideIn 0.2s ease;

  @keyframes feature-slideIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const FeatureTitle = styled.h4`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
`;

export const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
  text-align: center;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-top: 20px;
`;

export const PrevIcon = styled(GrPrevious)`
  width: 16px;
  height: 16px;
  color: ${({ theme }) => theme.colors.black};
`;

export const NextIcon = styled(GrNext)`
  width: 16px;
  height: 16px;
  color: ${({ theme }) => theme.colors.black};
`;

export const PrevFeatureButton = styled(Button)`
  width: fit-content;
  padding: 12px;
  background: ${({ theme }) => theme.colors.white};

  &:hover {
    background: rgb(236, 236, 237);
  }
`;

export const NextFeatureButton = styled(Button)`
  width: fit-content;
  padding: 12px;
  background: ${({ theme }) => theme.colors.white};

  &:hover {
    background: rgb(236, 236, 237);
  }
`;

export const MagicIcon = styled(FaWandMagicSparkles)`
  transition: 0.2s ease;
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.colors.white};
  margin-right: 10px;
`;

export const PenIcon = styled(FaPen)`
  transition: 0.2s ease;
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.colors.white};
  margin-right: 10px;
`;

export const HistoryIcon = styled(FaListUl)`
  transition: 0.2s ease;
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.colors.white};
  margin-right: 10px;
`;

export const SettingsIcon = styled(IoMdSettings)`
  transition: 0.2s ease;
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.colors.white};
  margin-right: 10px;
`;
