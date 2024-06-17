export enum CommonColors {
  white = 'white',
  black = 'black',
}

export const DarkTheme = {
  colors: {
    ...CommonColors,
    primaryBg: 'rgb(9, 9, 11)',
    primaryFont: 'white',
    primaryBoxShadow:
      '0 0 black, 0 0 #0000, 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px -1px rgba(0, 0, 0, .1)',
    borderDefault: 'rgb(39, 39, 42)',
    borderActive: 'white',
    inputHover: 'rgb(5, 5, 6)',
    secondaryBg: 'rgb(39, 39, 42)',
    secondaryFont: 'rgb(161, 161, 170)',
    buttonBg: 'white',
    buttonFont: 'black',
    buttonHover: '225, 225, 26',
    buttonDisabled: 'rgb(130, 130, 132)',
    icon: 'white',
    buttonIcon: 'black',
    errorFont: 'rgb(160, 62, 62)',
    errorBorder: 'rgb(160, 62, 62)',
  },
};

export const LightTheme = {
  colors: {
    ...CommonColors,
    primaryBg: 'white',
    primaryFont: 'black',
    primaryBoxShadow:
      '0 0 black, 0 0 #0000, 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px -1px rgba(0, 0, 0, .1)',
    borderDefault: 'rgb(228, 228, 231)',
    borderActive: 'black',
    inputHover: 'rgb(250, 250, 251)',
    secondaryBg: 'rgb(244, 244, 245)',
    secondaryFont: 'rgb(113, 113, 122)',
    buttonBg: 'black',
    buttonFont: 'white',
    buttonHover: 'rgb(47, 47, 49)',
    buttonDisabled: 'rgb(139, 139, 141)',
    icon: 'black',
    buttonIcon: 'white',
    errorFont: 'rgb(220, 38, 38)',
    errorBorder: 'rgb(220, 38, 38)',
  },
};
