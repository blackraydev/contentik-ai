import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input } from '../../UI';
import { useCheckScreenType } from '../../hooks';
import { PublicRoutes } from '../../consts';
import { AuthService } from '../../api';
import { pluralize } from '../../utils';
import { useToastsScope } from '../../scopes';
import { ButtonsWrapper, Label, RequestAccessFormStyled, Title } from './styled';

type FormField = 'email';
const ACCESS_ESTIMATE_TIME_STORAGE_KEY = 'accessEstimateTime';

export const RequestAccessForm = () => {
  const navigate = useNavigate();
  const { showToast } = useToastsScope();
  const { isMobile } = useCheckScreenType();
  const [email, setEmail] = useState('');
  const [isSendingResetLink, setIsSendingResetLink] = useState(false);
  const [invalidFields, setInvalidFields] = useState<FormField[]>([]);
  const [estimateTime, setEstimateTime] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const isInvalid = useMemo(() => !email.trim(), [email]);

  useEffect(() => {
    const savedEstimateTime = sessionStorage.getItem(ACCESS_ESTIMATE_TIME_STORAGE_KEY);

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
    sessionStorage.setItem(ACCESS_ESTIMATE_TIME_STORAGE_KEY, time.toString());
    setEstimateTime(time);

    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    timerRef.current = setInterval(() => {
      setEstimateTime((prevEstimateTime) => {
        if (prevEstimateTime > 0) {
          sessionStorage.setItem(ACCESS_ESTIMATE_TIME_STORAGE_KEY, String(prevEstimateTime - 1));
          return prevEstimateTime - 1;
        }

        sessionStorage.removeItem(ACCESS_ESTIMATE_TIME_STORAGE_KEY);
        return 0;
      });
    }, 1000);
  };

  const validate = () => {
    if (!email.trim()) {
      setInvalidFields((prev) => [...prev, 'email']);
    }
  };

  const removeInvalidField = (field: FormField) => {
    setInvalidFields((prev) => prev.filter((it) => it !== field));
  };

  const handleSendResetLink = async () => {
    try {
      if (isInvalid) {
        return validate();
      }
      setIsSendingResetLink(true);

      await AuthService.sendResetLink(email);
      setTimer(30);

      showToast('Отправили письмо с инструкциями на вашу почту', 'success');
    } catch (e: any) {
      if (e.response.status === 400) {
        showToast('Пользователя с таким Email не существует', 'failure');
      }
    } finally {
      setIsSendingResetLink(false);
    }
  };

  const handleNavigateToAuth = async () => {
    navigate(PublicRoutes.Auth);
  };

  return (
    <RequestAccessFormStyled $isMobile={isMobile}>
      <Title>Восстановление доступа</Title>
      <Label>Введите ваш Email и мы вышлем вам инструкции по восстановлению доступа</Label>
      <Input
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          removeInvalidField('email');
        }}
        placeholder="Email"
        error={{ visible: invalidFields.includes('email') }}
      />
      <ButtonsWrapper>
        <Button
          disabled={isSendingResetLink || estimateTime > 0}
          isLoading={isSendingResetLink}
          onClick={handleSendResetLink}
        >
          {estimateTime === 0
            ? 'Отправить'
            : `${estimateTime} ${pluralize(estimateTime, ['секунда', 'секунды', 'секунд'])}`}
        </Button>
        <Button onClick={handleNavigateToAuth}>Назад</Button>
      </ButtonsWrapper>
    </RequestAccessFormStyled>
  );
};
