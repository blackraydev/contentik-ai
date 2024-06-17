import { TabsStyled, TabsWrapper } from './styles';

type Tab = {
  value: string;
  label: string;
};

export type TabsProps = {
  options: Tab[];
  value: string;
  onChange: (value: string) => void;
};

export const Tabs = ({ options, value, onChange }: TabsProps) => {
  return (
    <TabsWrapper>
      {options.map((tab) => (
        <TabsStyled
          key={tab.value}
          $active={tab.value === value}
          onClick={() => onChange(tab.value)}
        >
          {tab.label}
        </TabsStyled>
      ))}
    </TabsWrapper>
  );
};
