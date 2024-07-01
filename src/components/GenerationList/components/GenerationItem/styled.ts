import styled from 'styled-components';
import { IoClose } from 'react-icons/io5';

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
  align-items: flex-end;
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

export const GenerationItemStyled = styled.div<{ $active: boolean }>`
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
`;
