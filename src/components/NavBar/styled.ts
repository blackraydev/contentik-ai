import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { FaWandMagicSparkles } from 'react-icons/fa6';
import { FaListUl, FaPen } from 'react-icons/fa';
import { IoRocketSharp } from 'react-icons/io5';
import { MdTonality } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';

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

export const BurgerMenuIcon = styled(RxHamburgerMenu)`
  transition: 0.2s ease;
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.colors.icon};
`;

export const NavBarMobileStyled = styled.div`
  transition: 0.2s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

export const NavigationMobile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;
`;

export const NavLinkMobile = styled(Link)<{ $active: boolean }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.2s ease;
  color: ${({ theme, $active }) => ($active ? theme.colors.buttonFont : theme.colors.primaryFont)};
  text-decoration: none;
  padding: 10px;
  border-radius: 10px;
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

export const TopPartMobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 20px;
`;

export const NavbarOverlay = styled.div<{ $isMobileOpen?: boolean }>`
  transition: 0.2s ease;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;

  ${({ $isMobileOpen }) =>
    $isMobileOpen
      ? css`
          animation: navBarOverlayFadeIn 0.15s ease;
        `
      : css`
          animation: navBarOverlayFadeOut 0.15s ease;
        `}

  @keyframes navBarOverlayFadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes navBarOverlayFadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

export const LogoWrapper = styled.div`
  width: 100%;
  cursor: pointer;
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 30px;
`;

export const NavBarMobileDrawer = styled.div<{ $isMobileOpen?: boolean }>`
  transition: 0.2s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 100%;
  color: ${({ theme }) => theme.colors.primaryFont};
  padding: ${({ $isMobileOpen }) => ($isMobileOpen ? '15px' : '0')};
  padding-bottom: 15px;
  background: ${({ theme, $isMobileOpen }) => ($isMobileOpen ? theme.colors.primaryBg : 'inherit')};

  ${LogoWrapper} {
    padding: 10px;
  }

  ${({ $isMobileOpen }) =>
    $isMobileOpen
      ? css`
          animation: navbarFadeIn 0.15s ease;
        `
      : css`
          animation: navbarFadeOut 0.15s ease;
        `}

  @keyframes navbarFadeIn {
    from {
      transform: translateX(-250px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes navbarFadeOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(-250px);
      opacity: 0;
    }
  }
`;

export const NavBarStyled = styled.div`
  transition: 0.2s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 100%;
  color: ${({ theme }) => theme.colors.primaryFont};
  padding: 0;
  padding-bottom: 25px;
`;

export const Logo = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 5px;
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
