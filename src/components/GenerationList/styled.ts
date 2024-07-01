import styled from 'styled-components';

export const GenerationHistoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 50%;
  height: calc(100vh - 100px);
  padding-bottom: 25px;
`;

export const GenerationListStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: 100%;
  overflow-y: scroll !important;
  padding-bottom: 5px;

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
