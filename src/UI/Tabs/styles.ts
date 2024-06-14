import styled from 'styled-components';

export const TabsWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: nowrap;
  overflow-x: scroll;
  background: ${({ theme }) => theme.colors.primary};
  width: 100%;
  padding: 5px;
  border-radius: 20px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TabsStyled = styled.div<{ $active?: boolean }>`
  transition: 0.2s ease;
  cursor: pointer;
  padding: 10px 15px;
  background: ${({ theme, $active }) =>
    $active ? theme.colors.primaryHover : theme.colors.primaryDisabled};
  color: ${({ theme }) => theme.colors.primaryText};
  border-radius: 20px;
  width: 50%;
  text-align: center;
`;
