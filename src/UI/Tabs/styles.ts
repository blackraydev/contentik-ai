import styled from 'styled-components';

export const TabsWrapper = styled.div`
  transition: 0.2s ease;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  background: ${({ theme }) => theme.colors.secondaryBg};
  padding: 5px;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TabsStyled = styled.div<{ $active?: boolean }>`
  transition: 0.2s ease;
  cursor: pointer;
  width: 50%;
  padding: 10px 0;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.primaryFont};
  background: ${({ $active, theme }) =>
    $active ? theme.colors.primaryBg : theme.colors.secondaryBg};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.primaryFont : theme.colors.secondaryFont};
  text-align: center;
  box-shadow: ${({ $active, theme }) => $active && theme.colors.primaryBoxShadow};
`;
