import styled from 'styled-components';

export const GenerationListStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 50%;
  height: calc(100vh - 105px);
  overflow-y: scroll !important;
  padding-bottom: 25px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const GenerationsEmptyText = styled.p`
  transition: 0.2s ease;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.primaryFont};
  width: 100%;
  text-align: center;
  margin-top: 20px;
`;
