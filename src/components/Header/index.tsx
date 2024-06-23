import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HeaderDetails, PrivateRoutes } from '../../consts';
import { Tooltip } from '../../UI';
import { ThemeToggle } from '../ThemeToggle';
import { UserTooltipContent } from './components';
import { Description, Details, HeaderStyled, IconsWrapper, Title, UserIcon } from './styled';

export const Header = () => {
  const { pathname } = useLocation();
  const [{ title, description }, setDetails] = useState(HeaderDetails[PrivateRoutes.Dashboard]);

  useEffect(() => {
    const targetRoute = Object.values(PrivateRoutes).find((route) => route === pathname);
    setDetails(HeaderDetails[targetRoute || PrivateRoutes.Dashboard]);
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
