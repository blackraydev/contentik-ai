import styled from 'styled-components';
import { Button, Input } from '../../../../UI';
import { MdOutlineClear } from 'react-icons/md';
import { AiOutlineInfoCircle } from 'react-icons/ai';

export const PhotoUploadStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  text-align: start;
  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primaryFont};
`;

export const Label = styled.span`
  transition: 0.2s ease;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primaryFont};
`;

export const ButtonStyled = styled(Button)`
  height: 50px;
  margin: 0;
`;

export const PhotoUploadBlocks = styled.div<{ $fullWidth: boolean }>`
  display: ${({ $fullWidth }) => ($fullWidth ? 'block' : 'flex')};
  align-items: center;
  gap: 10px;
  flex-wrap: nowrap;
  width: 100%;

  ${ButtonStyled} {
    width: ${({ $fullWidth }) => ($fullWidth ? '100%' : '50px')};
  }
`;

export const InputHidden = styled(Input)`
  display: none;
  width: unset;
`;

export const CrossIcon = styled(MdOutlineClear)`
  cursor: pointer;
  position: absolute;
  transition: 0.2s ease;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0;
`;

export const PhotoHolder = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    ${CrossIcon} {
      opacity: 1;
    }
  }
`;

export const Photo = styled.img`
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 15px;
`;

export const InfoIcon = styled(AiOutlineInfoCircle)`
  cursor: pointer;
  transition: 0.2s ease;
  margin-top: 1px;
  color: ${({ theme }) => theme.colors.secondaryFont};
`;
