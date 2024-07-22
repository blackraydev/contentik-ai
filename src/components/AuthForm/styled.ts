import styled from 'styled-components';
import { FcGoogle } from 'react-icons/fc';
import { Button } from '../../UI';

export const Title = styled.h1`
  transition: 0.2s ease;
  color: ${({ theme }) => theme.colors.primaryFont};
  margin-bottom: 15px;
  text-align: center;
`;

export const Label = styled.p`
  transition: 0.2s ease;
  color: ${({ theme }) => theme.colors.secondaryFont};
  margin-bottom: 25px;
  text-align: center;
`;

export const LabelSeparator = styled.label<{ $isMobile: boolean }>`
  transition: 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.secondaryFont};
  text-transform: uppercase;
  width: 100%;
  text-align: center;
  position: relative;

  &:before {
    transition: 0.2s ease;
    content: '';
    display: block;
    height: 1px;
    background: ${({ theme }) => theme.colors.separator};
    width: calc((100% - 75px) / 2);
  }
  &:after {
    transition: 0.2s ease;
    content: '';
    display: block;
    height: 1px;
    background: ${({ theme }) => theme.colors.separator};
    width: calc((100% - 75px) / 2);
  }
`;

export const AuthFormStyled = styled.div<{ $isMobile: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${({ $isMobile }) => ($isMobile ? '100%' : '400px')};
  max-width: 400px;
  height: 100%;
  color: ${({ theme }) => theme.colors.primaryFont};

  ${Title} {
    font-size: ${({ $isMobile }) => ($isMobile ? '30px' : '32px')};
  }
  ${Label} {
    font-size: ${({ $isMobile }) => ($isMobile ? '14px' : '16px')};
  }
  ${LabelSeparator} {
    margin-top: ${({ $isMobile }) => ($isMobile ? '20px' : '30px')};
    margin-bottom: ${({ $isMobile }) => ($isMobile ? '10px' : '20px')};
  }
`;

export const SignInButton = styled(Button)`
  width: 100%;
  height: 48px;
  gap: 8px;
`;

export const GoogleIcon = styled(FcGoogle)`
  width: 22px;
  height: 22px;
`;

export const AuthButtonContainer = styled.div`
  width: 100%;
  border-radius: 15px;
  overflow: hidden;

  div,
  span {
    font-size: 16px !important;
  }
`;

export const YandexAuthButton = styled(Button)`
  max-height: 48px;
  width: 100%;
`;

export const YandexLogo = styled.img`
  width: 22px;
  height: 22px;
`;

export const EnterLabel = styled.p`
  transition: 0.2s ease;
  color: ${({ theme }) => theme.colors.secondaryFont};
  margin-top: 25px;
`;

export const EnterLink = styled.span`
  cursor: pointer;
  transition: 0.2s ease;
  color: ${({ theme }) => theme.colors.secondaryFont};
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryFont};

  &:hover {
    color: ${({ theme }) => theme.colors.primaryFont};
    border-bottom: 1px solid ${({ theme }) => theme.colors.primaryFont};
  }
`;
