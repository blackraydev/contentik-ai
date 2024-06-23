import styled from 'styled-components';
import { FaUserLarge } from 'react-icons/fa6';

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-height: 50px;
  height: 50px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Title = styled.h1`
  transition: 0.2s ease;
  color: ${({ theme }) => theme.colors.primaryFont};
  font-size: 24px;
  font-weight: 700;
  margin-top: -5px;
`;

export const Description = styled.p`
  transition: 0.2s ease;
  color: ${({ theme }) => theme.colors.secondaryFont};
  font-size: 16px;
  font-weight: 400;
`;

export const IconsWrapper = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  padding-right: 5px;
`;

export const UserIcon = styled(FaUserLarge)`
  transition: 0.2s ease;
  cursor: pointer;
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.colors.primaryFont};
`;
