import { AiOutlineInfoCircle } from 'react-icons/ai';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
  font-size: 14px;
  color: ${({ theme }) => theme.colors.errorFont};
`;

export const Label = styled.label`
  margin-left: 10px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primaryFont};
`;

export const InputStyled = styled.input<{ $invalid?: boolean }>`
  transition: 0.2s ease;
  height: 48px;
  font-size: 16px;
  border-radius: 0.75rem;
  padding: 0 15px;
  color: ${({ theme }) => theme.colors.primaryFont};
  background: ${({ theme }) => theme.colors.primaryBg};
  border: 1px solid
    ${({ theme, $invalid }) =>
      $invalid ? `${theme.colors.errorBorder} !important` : theme.colors.borderDefault};

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.borderActive};
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.secondaryFont};
  }
`;

export const InfoIcon = styled(AiOutlineInfoCircle)`
  cursor: pointer;
  transition: 0.2s ease;
  color: ${({ theme }) => theme.colors.icon};
  margin-top: 1px;
`;
