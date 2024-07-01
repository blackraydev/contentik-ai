import { ReactNode, useState } from 'react';
import { AccordionStyled, ChevronIcon, ChildrenStyled, Header, Title } from './styled';

type AccordionProps = {
  title: string;
  children: ReactNode;
  width: string;
  height: string;
};

export const Accordion = ({ title, width, height, children }: AccordionProps) => {
  const [open, setOpen] = useState(false);

  return (
    <AccordionStyled>
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
