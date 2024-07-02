import styled from 'styled-components';
import { IoClose } from 'react-icons/io5';
import { FaWandMagicSparkles } from 'react-icons/fa6';
import { FaPen } from 'react-icons/fa';

export const MagicIcon = styled(FaWandMagicSparkles)`
  transition: 0.2s ease;
  width: 14px;
  height: 14px;
  color: ${({ theme }) => theme.colors.icon};
  margin-right: -5px;
`;

export const PenIcon = styled(FaPen)`
  transition: 0.2s ease;
  width: 13px;
  height: 13px;
  color: ${({ theme }) => theme.colors.icon};
  margin-right: -5px;
`;

export const GenerationDeleteIcon = styled(IoClose)`
  transition: 0.2s ease;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.secondaryFont};
  width: 24px;
  height: 24px;
  opacity: 0;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryFont};
  }
`;

export const GenerationHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 8px;
`;

export const GenerationTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const GenerationTopic = styled.p`
  transition: 0.2s ease;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primaryFont};
`;

export const GenerationDate = styled.p`
  transition: 0.2s ease;
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.secondaryFont};
`;

export const GenerationDescription = styled.p<{ $hasAdditionalInfo: boolean }>`
  transition: 0.2s ease;
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.secondaryFont};
  margin-bottom: ${({ $hasAdditionalInfo }) => ($hasAdditionalInfo ? '5px' : '0')};
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const GenerationAdditionalWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 5px;
  margin-top: 5px;
  flex-wrap: wrap;
`;

export const GenerationAdditionalName = styled.p`
  transition: 0.2s ease;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primaryFont};
  width: fit-content;
`;

export const GenerationAdditionalInfo = styled.p`
  transition: 0.2s ease;
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primaryFont};
  background: ${({ theme }) => theme.colors.buttonFont};
  width: fit-content;
  padding: 5px 10px;
  border-radius: 15px;
  box-shadow: ${({ theme }) => theme.colors.primaryBoxShadow};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
`;

export const GenerationItemStyled = styled.div<{ $active: boolean; $isMobile: boolean }>`
  transition: 0.2s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 1.5rem;
  background: ${({ theme }) => theme.colors.primaryBg};
  border: 1px solid
    ${({ theme, $active }) => ($active ? theme.colors.buttonBg : theme.colors.primaryBg)};
  box-shadow: ${({ theme }) => theme.colors.primaryBoxShadow};

  &:hover {
    ${GenerationDeleteIcon} {
      opacity: 1;
    }
  }

  ${GenerationTopic} {
    font-size: ${({ $isMobile }) => ($isMobile ? '14px' : '16px')};
  }
  ${GenerationDate} {
    font-size: ${({ $isMobile }) => ($isMobile ? '13px' : '14px')};
  }
  ${GenerationDescription} {
    font-size: ${({ $isMobile }) => ($isMobile ? '13px' : '14px')};
  }
  ${GenerationAdditionalName} {
    font-size: ${({ $isMobile }) => ($isMobile ? '13px' : '14px')};
  }
  ${GenerationAdditionalInfo} {
    font-size: ${({ $isMobile }) => ($isMobile ? '13px' : '14px')};
  }
`;
