import styled, { css } from 'styled-components';
import { IoCheckmark } from 'react-icons/io5';
import { Button } from '../../UI';

export const TariffItem = styled.div`
  transition: 0.2s ease;
  display: flex;
  flex-direction: column;
  height: fit-content;
  padding: 20px;
  border-radius: 15px;
  background: ${({ theme }) => theme.colors.primaryBg};
  color: ${({ theme }) => theme.colors.primaryFont};
  box-shadow: ${({ theme }) => theme.colors.primaryBoxShadow};
`;

export const TariffItemPro = styled.div`
  margin-top: 1px;
  transition: 0.2s ease;
  display: flex;
  flex-direction: column;
  height: fit-content;
  padding: 20px;
  border-width: 1px;
  border-radius: 15px;
  position: relative;
  background: ${({ theme }) => theme.colors.primaryBg};
  color: ${({ theme }) => theme.colors.primaryFont};
  box-shadow: ${({ theme }) => theme.colors.primaryBoxShadow};

  &:after {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    height: calc(100% + 2px);
    width: calc(100% + 2px);
    background: linear-gradient(
      -45deg,
      rgb(227, 185, 251),
      rgb(193, 109, 247),
      rgb(126, 106, 239),
      rgb(91, 77, 236)
    );
    border-radius: 15px;
    z-index: -1;
    animation: glowing 10s ease alternate infinite;
    background-size: 400% 400%;
  }
`;

export const TariffSticker = styled.div<{ $plan: 'trial' | 'start' | 'pro' | 'expert' }>`
  transition: 0.2s ease;
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 15px;

  ${({ $plan }) => {
    switch ($plan) {
      case 'pro':
        return css`
          background: none;

          ${TariffTitle} {
            color: ${({ theme }) => theme.colors.white};
          }
          ${TariffChips} {
            background: ${({ theme }) => theme.colors.white};
            color: ${({ theme }) => theme.colors.black};
          }
          ${TariffPrice} {
            color: ${({ theme }) => theme.colors.white};
          }
        `;
      case 'expert':
        return css`
          background: ${({ theme }) => theme.colors.buttonBg};
          color: ${({ theme }) => theme.colors.buttonFont};

          ${TariffTitle} {
            color: ${({ theme }) => theme.colors.buttonFont};
          }
          ${TariffPrice} {
            color: ${({ theme }) => theme.colors.buttonFont};
          }
        `;
    }
  }}
`;

export const TariffStickerPro = styled.div`
  display: flex;
  border: none;
  outline: none;
  position: relative;
  z-index: 0;
  border-radius: 15px;
  width: 100%;
  height: 100%;

  &:before {
    content: '';
    background: linear-gradient(
      -45deg,
      rgb(227, 185, 251),
      rgb(193, 109, 247),
      rgb(126, 106, 239),
      rgb(91, 77, 236)
    );
    position: absolute;
    background-size: 400% 400%;
    z-index: -1;
    width: 100%;
    height: 100%;
    animation: glowing 10s ease infinite;
    transition: opacity 0.2s ease-out;
    border-radius: 15px;
    opacity: 1;
  }

  @keyframes glowing {
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }
`;

export const TariffHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  gap: 10px;
`;

export const TariffTitle = styled.p`
  transition: 0.2s ease;
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primaryFont};
`;

export const TariffChips = styled.div`
  transition: 0.2s ease;
  padding: 5px 10px;
  background: ${({ theme }) => theme.colors.icon};
  color: ${({ theme }) => theme.colors.buttonFont};
  border-radius: 15px;
  font-size: 14px;
  font-weight: 400;
`;

export const TariffPrice = styled.p`
  transition: 0.2s ease;
  color: ${({ theme }) => theme.colors.primaryFont};
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const ChooseTariffButton = styled(Button)`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};

  &:hover {
    background: rgb(236, 236, 238);
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const ChooseExpertTariffButton = styled(Button)`
  background: ${({ theme }) => theme.colors.elemBg};
  color: ${({ theme }) => theme.colors.primaryFont};

  &:hover {
    background: ${({ theme }) => theme.colors.inputHover};
  }
`;

export const TariffFunction = styled.div`
  transition: 0.2s ease;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 25px;
  padding: 0 10px;
`;

export const TariffFunctionTitle = styled.p`
  transition: 0.2s ease;
  color: ${({ theme }) => theme.colors.primaryFont};
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 5px;
`;

export const TariffFunctionDescription = styled.p`
  display: flex;
  align-items: center;
  gap: 5px;
  transition: 0.2s ease;
  color: ${({ theme }) => theme.colors.secondaryFont};
  font-size: 16px;
  font-weight: 400;
`;

export const MarkIcon = styled(IoCheckmark)`
  transition: 0.2s ease;
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.colors.icon};
  margin-top: -2px;
`;

export const Wrapper = styled.div<{ $isMobile: boolean }>`
  display: flex;
  flex-direction: ${({ $isMobile }) => ($isMobile ? 'column' : 'row')};
  justify-content: space-between;
  align-items: ${({ $isMobile }) => ($isMobile ? 'center' : 'flex-start')};
  height: 100%;
  width: 100%;
  overflow-y: ${({ $isMobile }) => ($isMobile ? 'scroll' : 'none')};
  padding-bottom: ${({ $isMobile }) => ($isMobile ? '80px' : '25px')};
  gap: ${({ $isMobile }) => ($isMobile ? '20px' : '0')};

  &::-webkit-scrollbar {
    display: none;
  }

  ${TariffItem} {
    width: ${({ $isMobile }) => ($isMobile ? 'calc(100% - 5px)' : 'calc(25% - 10px)')};
  }
  ${TariffItemPro} {
    width: ${({ $isMobile }) => ($isMobile ? 'calc(100% - 5px)' : 'calc(25% - 10px)')};
  }
`;
