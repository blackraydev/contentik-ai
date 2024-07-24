import styled from 'styled-components';
import { FaRegCreditCard, FaUserLarge } from 'react-icons/fa6';
import { FiLogOut } from 'react-icons/fi';
import { LiaTelegram } from 'react-icons/lia';
import { MdOutlineMail } from 'react-icons/md';

export const TooltipContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  transition: 0.2s ease;
  cursor: pointer;
  text-align: start;
  padding: 10px;
  width: 100%;
  font-size: 16px;
  border-radius: 15px;
  color: ${({ theme }) => theme.colors.primaryFont};

  &:hover {
    background: ${({ theme }) => theme.colors.secondaryBg};
  }
`;

export const OptionLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  transition: 0.2s ease;
  cursor: pointer;
  text-align: start;
  padding: 10px;
  width: 100%;
  font-size: 16px;
  border-radius: 15px;
  color: ${({ theme }) => theme.colors.primaryFont};
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.colors.secondaryBg};
  }
`;

export const OptionText = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primaryFont};
`;

export const Separator = styled.div`
  width: calc(100% + 16px);
  transform: translateX(-8px);
  height: 1px;
  background: ${({ theme }) => theme.colors.borderDefault};
  margin: 5px 0;
`;

export const UserIcon = styled(FaUserLarge)`
  transition: 0.2s ease;
  width: 18px;
  height: 18px;
  color: ${({ theme }) => theme.colors.icon};
`;

export const CardIcon = styled(FaRegCreditCard)`
  transition: 0.2s ease;
  width: 18px;
  height: 18px;
  color: ${({ theme }) => theme.colors.icon};
`;

export const TelegramIcon = styled(LiaTelegram)`
  transition: 0.2s ease;
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.colors.icon};
`;

export const MailIcon = styled(MdOutlineMail)`
  transition: 0.2s ease;
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.colors.icon};
`;

export const LogoutIcon = styled(FiLogOut)`
  transition: 0.2s ease;
  width: 18px;
  height: 18px;
  color: ${({ theme }) => theme.colors.icon};
  margin-left: 2px;
`;
