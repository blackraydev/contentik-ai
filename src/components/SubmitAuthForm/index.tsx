import { useEffect, useRef, useState } from 'react';
import { Button } from '../../UI';
import { useCheckScreenType } from '../../hooks';
import { useUserScope } from '../../scopes';
import { ButtonsWrapper, Label, SubmitAuthFormStyled, Title } from './styled';
import { pluralize } from '../../utils';

const ACTIVATION_ESTIMATE_TIME_STORAGE_KEY = 'activationEstimateTime';

export const SubmitAuthForm = () => {
  const { user, resendActivationLink, logout } = useUserScope();
  const { isMobile } = useCheckScreenType();
  const [isResendingActivationLink, setIsResendingActivationLink] = useState(false);
  const [estimateTime, setEstimateTime] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const savedEstimateTime = sessionStorage.getItem(ACTIVATION_ESTIMATE_TIME_STORAGE_KEY);

    if (savedEstimateTime) {
      const time = Number(savedEstimateTime);
      setTimer(time);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, []);

  const setTimer = (time: number) => {
    sessionStorage.setItem(ACTIVATION_ESTIMATE_TIME_STORAGE_KEY, time.toString());
    setEstimateTime(time);

    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    timerRef.current = setInterval(() => {
      setEstimateTime((prevEstimateTime) => {
        if (prevEstimateTime > 0) {
          sessionStorage.setItem(ACTIVATION_ESTIMATE_TIME_STORAGE_KEY, String(prevEstimateTime - 1));
          return prevEstimateTime - 1;
        }

        sessionStorage.removeItem(ACTIVATION_ESTIMATE_TIME_STORAGE_KEY);
        return 0;
      });
    }, 1000);
  };

  const handleLogout = async () => {
    await logout();
  };

  const handleResendActivationLink = async () => {
    try {
      if (user) {
        setIsResendingActivationLink(true);
        await resendActivationLink(user.email);
        setTimer(30);
      }
    } finally {
      setIsResendingActivationLink(false);
    }
  };

  return (
    <SubmitAuthFormStyled $isMobile={isMobile}>
      <Title>Подтвердите аккаунт</Title>
      <Label>
        Мы отправили письмо на почту{` ${user?.email}` ?? ''}. <br />
        Для подтверждения аккаунта необходимо перейти по ссылке в письме.
      </Label>
      <ButtonsWrapper>
        <Button
          disabled={isResendingActivationLink || estimateTime > 0}
          isLoading={isResendingActivationLink}
          onClick={handleResendActivationLink}
        >
          {estimateTime === 0
            ? 'Отправить еще раз'
            : `${estimateTime} ${pluralize(estimateTime, ['секунда', 'секунды', 'секунд'])}`}
        </Button>
        <Button onClick={handleLogout}>Назад</Button>
      </ButtonsWrapper>
    </SubmitAuthFormStyled>
  );
};
