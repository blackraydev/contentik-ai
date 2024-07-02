import { ReactNode, useState } from 'react';
import { AccordionStyled, ChevronIcon, ChildrenStyled, Header, Title } from './styled';
import { useCheckScreenType } from '../../hooks';

type AccordionProps = {
  title: string;
  children: ReactNode;
  width: string;
  height: string;
};

export const Accordion = ({ title, width, height, children }: AccordionProps) => {
  const { isMobile } = useCheckScreenType();
  const [open, setOpen] = useState(false);

  return (
    <AccordionStyled $isMobile={isMobile}>
      <Header onClick={() => setOpen((prevOpen) => !prevOpen)}>
        <Title>{title}</Title>
        <ChevronIcon $open={open} />
      </Header>
      <ChildrenStyled $open={open} $width={width} $height={height}>
        {children}
      </ChildrenStyled>
    </AccordionStyled>
  );
};
