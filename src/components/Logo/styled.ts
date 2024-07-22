import styled from 'styled-components';

export const LogoWrapper = styled.div`
  cursor: pointer;
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const LogoStyled = styled.img`
  transition: 0.2s ease;
  width: 40px;
  height: 40px;
  margin-right: 10px;
  background: ${({ theme }) => theme.colors.logo};
  padding: 8px;
  border-radius: 10px;
`;

export const LogoText = styled.p`
  transition: 0.2s ease;
  font-weight: 500;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primaryFont};
  margin-left: -8px;
`;
