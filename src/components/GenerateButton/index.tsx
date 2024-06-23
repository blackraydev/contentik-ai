import { useNavigate } from 'react-router-dom';
import { ButtonProps } from '../../UI/Button';
import { GenerateButtonStyled } from './styled';

type GenerateButtonProps = Omit<ButtonProps, 'children'>;

export const GenerateButton = (props: GenerateButtonProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/app');
  };

  return (
    <GenerateButtonStyled {...props} onClick={handleClick}>
      Сгенерировать
    </GenerateButtonStyled>
  );
};
