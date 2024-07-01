import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaWandMagicSparkles } from 'react-icons/fa6';
import { FaListUl, FaPen } from 'react-icons/fa';
import { IoRocketSharp } from 'react-icons/io5';
import { MdTonality } from 'react-icons/md';

export const NavBarStyled = styled.div`
  transition: 0.2s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 100%;
  color: ${({ theme }) => theme.colors.primaryFont};
  padding-bottom: 25px;
`;

export const LogoWrapper = styled.div`
  width: 100%;
  cursor: pointer;
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 30px;
`;

export const Logo = styled.img`
  width: 30px;
  height: 30px;
`;

export const LogoText = styled.p`
  transition: 0.2s ease;
  font-weight: 500;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primaryFont};
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const SectionTitle = styled.p`
  transition: 0.2s ease;
  font-weight: 500;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primaryFont};
`;

export const Navigation = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TopPart = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;

export const BottomPart = styled.div`
  width: 100%;
`;

export const MagicIcon = styled(FaWandMagicSparkles)`
  transition: 0.2s ease;
  width: 16px;
  height: 16px;
  color: ${({ theme }) => theme.colors.icon};
`;

export const PenIcon = styled(FaPen)`
  transition: 0.2s ease;
  width: 16px;
  height: 16px;
  color: ${({ theme }) => theme.colors.icon};
`;

export const SeoIcon = styled(IoRocketSharp)`
  transition: 0.2s ease;
  width: 16px;
  height: 16px;
  color: ${({ theme }) => theme.colors.icon};
`;

export const ToneIcon = styled(MdTonality)`
  transition: 0.2s ease;
  width: 16px;
  height: 16px;
  color: ${({ theme }) => theme.colors.icon};
`;

export const HistoryIcon = styled(FaListUl)`
  transition: 0.2s ease;
  width: 16px;
  height: 16px;
  color: ${({ theme }) => theme.colors.icon};
`;

export const NavLink = styled(Link)<{ $active: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: 0.2s ease;
  font-size: 16px;
  color: ${({ theme, $active }) => ($active ? theme.colors.buttonFont : theme.colors.primaryFont)};
  text-decoration: none;
  padding: 15px;
  border-radius: 15px;
  background: ${({ theme, $active }) => $active && theme.colors.buttonBg};

  ${MagicIcon} {
    color: ${({ theme, $active }) => $active && theme.colors.buttonFont};
  }
  ${PenIcon} {
    color: ${({ theme, $active }) => $active && theme.colors.buttonFont};
  }
  ${SeoIcon} {
    color: ${({ theme, $active }) => $active && theme.colors.buttonFont};
  }
  ${ToneIcon} {
    color: ${({ theme, $active }) => $active && theme.colors.buttonFont};
  }
  ${HistoryIcon} {
    color: ${({ theme, $active }) => $active && theme.colors.buttonFont};
  }
`;
