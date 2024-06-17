import styled from 'styled-components';

export const TabsWrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: nowrap;
  overflow-x: scroll;
  background: ${({ theme }) => theme.colors.primary};
  padding: 0 25px;
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  overflow: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TabsStyled = styled.div<{ $active?: boolean }>`
  transition: 0.2s ease;
  cursor: pointer;
  padding: 15px 0;
  color: ${({ theme }) => theme.colors.primaryText};
  border-bottom: 2px solid
    ${({ $active, theme }) => ($active ? theme.colors.chipsActive : 'transparent')};
  color: ${({ $active, theme }) => ($active ? theme.colors.chipsActive : theme.colors.primaryText)};
  text-align: center;
`;
