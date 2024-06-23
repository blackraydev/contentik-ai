import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HeaderDetails, PrivateRoutes } from '../../consts';
import { Tooltip } from '../../UI';
import { ThemeToggle } from '../ThemeToggle';
import { UserTooltipContent } from './components';
import { Description, Details, HeaderStyled, IconsWrapper, Title, UserIcon } from './styled';

export const Header = () => {
  const { pathname } = useLocation();
  const [{ title, description }, setDetails] = useState(HeaderDetails[PrivateRoutes.App]);

  useEffect(() => {
    switch (pathname) {
      case PrivateRoutes.App:
        return setDetails(HeaderDetails[PrivateRoutes.App]);
      case PrivateRoutes.History:
        return setDetails(HeaderDetails[PrivateRoutes.History]);
      case PrivateRoutes.Tariffs:
        return setDetails(HeaderDetails[PrivateRoutes.Tariffs]);
      case PrivateRoutes.Optimization:
        return setDetails(HeaderDetails[PrivateRoutes.Optimization]);
      case PrivateRoutes.Tonality:
        return setDetails(HeaderDetails[PrivateRoutes.Tonality]);
      default:
        return setDetails(HeaderDetails[PrivateRoutes.App]);
    }
  }, [pathname]);

  return (
    <HeaderStyled>
      <Details>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Details>
      <IconsWrapper>
        <ThemeToggle />
        <Tooltip
          content={<UserTooltipContent />}
          width={200}
          offsetVertical={170}
          offsetHorizontal={92}
          type="click"
          position="bottom"
        >
          <UserIcon />
        </Tooltip>
      </IconsWrapper>
    </HeaderStyled>
  );
};
