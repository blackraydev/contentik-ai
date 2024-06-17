import styled from 'styled-components';

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 30px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Logo = styled.img`
  width: 30px;
  height: 30px;
`;

export const LogoText = styled.p`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primaryFont};
`;
