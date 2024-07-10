import { useState } from 'react';
import {
  ButtonsWrapper,
  FeatureDescription,
  FeaturesCarousel,
  FeaturesStyled,
  FeatureTitle,
  HistoryIcon,
  MagicIcon,
  NextFeatureButton,
  NextIcon,
  PenIcon,
  PrevFeatureButton,
  PrevIcon,
  SettingsIcon,
} from './styled';

const features = [
  {
    title: 'Генерация',
    description: 'Создавайте уникальный контент на основе указанных параметров',
    icon: <MagicIcon />,
  },
  {
    title: 'Редактирование',
    description: 'Улучшайте и адаптируйте ваши тексты.',
    icon: <PenIcon />,
  },
  {
    title: 'Параметры',
    description:
      'Настраивайте тему, описание, тип контента, целевую аудиторию, ключевые слова, стиль письма, тон письма и язык генерации',
    icon: <SettingsIcon />,
  },
  {
    title: 'История',
    description: 'Сохраняйте и просматривайте все ваши генерации',
    icon: <HistoryIcon />,
  },
];

export const Features = () => {
  const [step, setStep] = useState(0);

  const handlePrevClick = () => {
    if (step > 0) {
      setStep((prevStep) => prevStep - 1);
    } else {
      setStep(features.length - 1);
    }
  };

  const handleNextClick = () => {
    if (step < features.length - 1) {
      setStep((prevStep) => prevStep + 1);
    } else {
      setStep(0);
    }
  };

  return (
    <FeaturesStyled $step={step}>
      <FeaturesCarousel key={features[step].title}>
        <FeatureTitle>
          {features[step].icon}
          {features[step].title}
        </FeatureTitle>
        <FeatureDescription>{features[step].description}</FeatureDescription>
      </FeaturesCarousel>
      <ButtonsWrapper>
        <PrevFeatureButton onClick={handlePrevClick}>
          <PrevIcon />
        </PrevFeatureButton>
        <NextFeatureButton onClick={handleNextClick}>
          <NextIcon />
        </NextFeatureButton>
      </ButtonsWrapper>
    </FeaturesStyled>
  );
};
