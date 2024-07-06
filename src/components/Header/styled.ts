import styled from 'styled-components';
import { FaUserLarge } from 'react-icons/fa6';
import { RxHamburgerMenu } from 'react-icons/rx';

export const HeaderStyled = styled.div<{ $isMobile: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 50px;
  height: 50px;
  position: ${({ $isMobile }) => ($isMobile ? 'fixed' : 'relative')};
`;

export const Title = styled.h1`
  transition: 0.2s ease;
  color: ${({ theme }) => theme.colors.primaryFont};
  font-size: 24px;
  font-weight: 700;
`;

export const Details = styled.div<{ $isMobile: boolean }>`
  display: flex;
  flex-direction: ${({ $isMobile }) => ($isMobile ? 'row' : 'column')};
  align-items: ${({ $isMobile }) => ($isMobile ? 'center' : 'flex-start')};
  gap: ${({ $isMobile }) => ($isMobile ? '25px' : '5px')};

  ${Title} {
    font-size: ${({ $isMobile }) => ($isMobile ? '20px' : '24px')};
    margin-top: ${({ $isMobile }) => ($isMobile ? '0' : '-5px')};
  }
`;

export const Description = styled.p`
  transition: 0.2s ease;
  color: ${({ theme }) => theme.colors.secondaryFont};
  font-size: 16px;
  font-weight: 400;
`;

export const IconsWrapper = styled.div<{ $isMobile: boolean }>`
  display: flex;
  gap: ${({ $isMobile }) => ($isMobile ? '30px' : '40px')};
  align-items: center;
  padding-right: 5px;
`;

export const UserIcon = styled(FaUserLarge)<{ $isMobile: boolean }>`
  transition: 0.2s ease;
  cursor: pointer;
  width: ${({ $isMobile }) => ($isMobile ? '18px' : '24px')};
  height: ${({ $isMobile }) => ($isMobile ? '18px' : '24px')};
  color: ${({ theme }) => theme.colors.primaryFont};
`;

export const BurgerMenuIcon = styled(RxHamburgerMenu)`
  transition: 0.2s ease;
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.colors.icon};
`;
