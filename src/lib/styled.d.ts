import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      // Common colors
      white: string;
      black: string;
      dark: string;

      // Theme colors
      primaryBg: string;
      primaryBgReverse: string;
      primaryFont: string;
      primaryLightFont: string;
      primaryBoxShadow: string;
      borderDefault: string;
      borderActive: string;
      secondaryBg: string;
      secondaryLightBg: string;
      secondaryFont: string;
      secondaryLightFont: string;
      inputHover: string;
      buttonBg: string;
      buttonFont: string;
      buttonHover: string;
      buttonDisabled: string;
      buttonIcon: string;
      icon: string;
      errorFont: string;
      errorBorder: string;
      placeholderFont: string;
    };
  }
}
