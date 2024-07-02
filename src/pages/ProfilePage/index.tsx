import { useCheckScreenType } from '../../hooks';
import { Wrapper } from './styled';

export const ProfilePage = () => {
  const { isMobile } = useCheckScreenType();

  return <Wrapper $isMobile={isMobile}>В разработке</Wrapper>;
};
