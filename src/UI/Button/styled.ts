import styled from 'styled-components';

export const ButtonStyled = styled.button`
  transition: 0.2s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: 16px;
  padding: 16px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.borderHover};
  }

  &:disabled {
    cursor: default;
    background: ${({ theme }) => theme.colors.primaryDisabled};
    color: ${({ theme }) => theme.colors.gray};
  }
`;
