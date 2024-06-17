import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string;
      card: string;
      primary: string;
      secondary: string;
      error: string;
      border: string;
      borderFocus: string;
      primaryHover: string;
      secondaryHover: string;
      errorHover: string;
      boxShadow: string;
      chipsActive: string;
      primaryDisabled: string;
      primaryText: string;
      secondaryText: string;
      placeholderText: string;
      icon: string;
      white: string;
      black: string;
      gray: string;
      brightWhite: string;
    };
  }
}
