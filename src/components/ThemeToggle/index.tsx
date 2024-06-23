import { Tooltip } from '../../UI';
import { useThemeScope } from '../../scopes';
import {
  Moon,
  MoonCircle,
  MoonRect,
  Sun,
  SunAndMoon,
  SunBeamLine,
  SunBeams,
  ThemeToggleStyled,
} from './styled';

export const ThemeToggle = () => {
  const { isDarkTheme, toggleTheme } = useThemeScope();

  return (
    <Tooltip
      width={125}
      position="bottom"
      content="Сменить тему"
      offsetVertical={52}
    >
      <ThemeToggleStyled
        id="theme-toggler"
        onClick={toggleTheme}
        $isDarkTheme={isDarkTheme}
        aria-label="auto"
        aria-live="polite"
      >
        <SunAndMoon aria-hidden="true" viewBox="0 0 24 24">
          <Moon id="moon-mask">
            <MoonRect x="0" y="0" />
            <MoonCircle r="7" />
          </Moon>
          <Sun mask="url(#moon-mask)" r={isDarkTheme ? 5 : 9} cx="12" cy="12" />
          <SunBeams>
            <SunBeamLine x1="12" y1="1" x2="12" y2="3" />
            <SunBeamLine x1="12" y1="21" x2="12" y2="23" />
            <SunBeamLine x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <SunBeamLine x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <SunBeamLine x1="1" y1="12" x2="3" y2="12" />
            <SunBeamLine x1="21" y1="12" x2="23" y2="12" />
            <SunBeamLine x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <SunBeamLine x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </SunBeams>
        </SunAndMoon>
      </ThemeToggleStyled>
    </Tooltip>
  );
};
