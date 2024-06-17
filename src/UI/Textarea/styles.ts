import styled from 'styled-components';

export const TextareaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primaryText};
  margin-bottom: 8px;
  margin-left: 10px;
`;

export const TextareaStyled = styled.textarea`
  transition: 0.2s ease;
  font-size: 16px;
  border-radius: 15px;
  padding: 15px;
  height: 160px;
  resize: none;
  color: ${({ theme }) => theme.colors.primaryText};
  background: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.border};

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.borderFocus};
  }

  &::-webkit-scrollbar {
    display: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholderText};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.primaryDisabled};
    color: ${({ theme }) => theme.colors.gray};
  }
`;
