import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      // Common colors
      white: string;
      black: string;
      
      // Theme colors
      primaryBg: string;
      primaryFont: string;
      primaryBoxShadow: string;
      borderDefault: string;
      borderActive: string;
      secondaryBg: string;
      secondaryFont: string;
      inputHover: string;
      buttonBg: string;
      buttonFont: string;
      buttonHover: string;
      buttonDisabled: string;
      buttonIcon: string;
      icon: string;
      errorFont: string;
      errorBorder: string;
    };
  }
}
