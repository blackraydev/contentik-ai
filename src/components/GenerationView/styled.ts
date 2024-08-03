import styled from 'styled-components';
import { Button } from '../../UI';

export const GenerationViewStyled = styled.div<{ $isMobile: boolean }>`
  transition: 0.2 ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: ${({ $isMobile }) => ($isMobile ? '100%' : '50%')};
  gap: 20px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 10px;
`;

export const BackToHistoryButton = styled(Button)`
  width: 100px;
`;

export const DeleteButton = styled(Button)`
  background: ${({ theme }) => theme.colors.errorFont};
  width: 100px;

  &:hover {
    background: ${({ theme }) => theme.colors.errorFont};
  }
`;

export const FullWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Text = styled.p`
  transition: 0.2 ease;
  padding: 25px 0;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primaryFont};
`;
