import { AiOutlineInfoCircle } from 'react-icons/ai';
import styled from 'styled-components';

export const TextareaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 27px);
`;

export const LabelWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 8px;
`;

export const LeftPart = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ErrorText = styled.span`
  transition: 0.2s ease;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.errorFont};
`;

export const Label = styled.label`
  transition: 0.2s ease;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primaryFont};
`;

export const TextareaStyled = styled.textarea<{ $invalid?: boolean }>`
  transition: 0.2s ease;
  font-size: 16px;
  border-radius: 15px;
  padding: 13px 15px;
  height: 160px;
  resize: none;
  color: ${({ theme }) => theme.colors.primaryFont};
  background: ${({ theme }) => theme.colors.primaryBg};
  border: 1px solid
    ${({ theme, $invalid }) =>
      $invalid ? `${theme.colors.errorBorder} !important` : theme.colors.borderDefault};

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.borderActive};
  }
  &::-webkit-scrollbar {
    display: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholderFont};
  }
`;

export const InfoIcon = styled(AiOutlineInfoCircle)`
  cursor: pointer;
  transition: 0.2s ease;
  color: ${({ theme }) => theme.colors.secondaryFont};
  margin-top: 1px;
`;
