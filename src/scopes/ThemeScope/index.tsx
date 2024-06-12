import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { DarkTheme, LightTheme } from '../../consts';
import { getCachedTheme, setCachedTheme } from './utils';

type ThemeScopeProps = {
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: DefaultTheme;
  isDarkTheme: boolean;
  toggleTheme: () => void;
  setTheme: (isDarkTheme: boolean) => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: LightTheme,
  isDarkTheme: false,
  toggleTheme: () => {},
  setTheme: () => {},
});

export const useThemeScope = () => useContext(ThemeContext);

export const ThemeScope = ({ children }: ThemeScopeProps) => {
  const [isDarkTheme, setIsDarkTheme] = useState(() => getCachedTheme());

  const theme = useMemo(() => (isDarkTheme ? DarkTheme : LightTheme), [isDarkTheme]);

  useEffect(() => {
    setCachedTheme(isDarkTheme);
  }, [isDarkTheme]);

  const toggleTheme = useCallback(() => {
    setIsDarkTheme((prev) => !prev);
  }, []);

  const setTheme = useCallback((isDarkTheme: boolean) => {
    setIsDarkTheme(isDarkTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, isDarkTheme, toggleTheme, setTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
