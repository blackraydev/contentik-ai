import styled from 'styled-components';
import { FcGoogle } from 'react-icons/fc';
import { Button } from '../../UI';

export const AuthFormStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 100%;
  color: ${({ theme }) => theme.colors.primaryFont};
`;

export const Title = styled.h1`
  transition: 0.2s ease;
  color: ${({ theme }) => theme.colors.primaryFont};
  margin-bottom: 15px;
`;

export const Label = styled.p`
  transition: 0.2s ease;
  color: ${({ theme }) => theme.colors.secondaryFont};
  margin-bottom: 25px;
`;

export const SignInButton = styled(Button)`
  width: 100%;
  height: 48px;
  gap: 8px;
`;

export const LabelSeparator = styled.label`
  transition: 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.secondaryFont};
  text-transform: uppercase;
  width: 100%;
  text-align: center;
  margin: 30px 0;
  margin-top: 30px;
  margin-bottom: 25px;
  position: relative;

  &:before {
    transition: 0.2s ease;
    content: '';
    display: block;
    height: 1px;
    background: ${({ theme }) => theme.colors.secondaryBg};
    width: calc((100% - 150px) / 2);
  }
  &:after {
    transition: 0.2s ease;
    content: '';
    display: block;
    height: 1px;
    background: ${({ theme }) => theme.colors.secondaryBg};
    width: calc((100% - 150px) / 2);
  }
`;

export const GoogleIcon = styled(FcGoogle)`
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
