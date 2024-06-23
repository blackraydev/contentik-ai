import styled from 'styled-components';

export const LayoutStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  gap: 30px;
  padding: 25px;
  padding-bottom: 0;
`;

export const LayoutMainStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 250px);
  height: 100%;
  gap: 30px;
`;

export const LayoutChildrenStyled = styled.div`
  display: flex;
  height: 100%;
`;
