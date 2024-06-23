import styled from 'styled-components';

export const ButtonStyled = styled.button`
  cursor: pointer;
  transition: 0.2s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background: ${({ theme }) => theme.colors.buttonBg};
  color: ${({ theme }) => theme.colors.buttonFont};
  font-size: 16px;
  padding: 16px;
  margin-top: 10px;
  gap: 10px;

  &:hover {
    background: ${({ theme }) => theme.colors.buttonHover};
  }
`;
