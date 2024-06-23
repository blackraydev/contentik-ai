export enum CommonColors {
  white = 'white',
  black = 'black',
  dark = 'rgb(23, 23, 25)',
}

export const DarkTheme = {
  colors: {
    ...CommonColors,
    primaryBg: 'rgb(13, 13, 14)',
    primaryBgReverse: 'white',
    primaryFont: 'white',
    primaryLightFont: 'rgb(235, 235, 238)',
    primaryBoxShadow:
      '0 0 white, 0 0 #FFF, 0 1px 3px 0 rgba(255, 255, 255, .1), 0 1px 2px -1px rgba(255, 255, 255, .1)',
    borderDefault: 'rgb(35, 35, 37)',
    borderActive: 'white',
    inputHover: 'rgb(5, 5, 6)',
    secondaryBg: 'rgb(39, 39, 45)',
    secondaryLightBg: 'rgb(26, 26, 31)',
    secondaryFont: 'rgb(161, 161, 170)',
    secondaryLightFont: 'rgb(200, 200, 203)',
    buttonBg: 'white',
    buttonFont: 'black',
    buttonHover: 'rgb(236, 236, 237)',
    buttonDisabled: 'rgb(130, 130, 132)',
    icon: 'white',
    buttonIcon: 'black',
    errorFont: 'rgb(160, 62, 62)',
    errorBorder: 'rgb(160, 62, 62)',
    placeholderFont: 'rgb(105, 105, 110)',
  },
};

export const LightTheme = {
  colors: {
    ...CommonColors,
    primaryBg: 'white',
    primaryBgReverse: 'rgb(9, 9, 11)',
    primaryFont: 'black',
    primaryLightFont: 'rgb(10, 10, 13)',
    primaryBoxShadow:
      '0 0 black, 0 0 #0000, 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px -1px rgba(0, 0, 0, .1)',
    borderDefault: 'rgb(228, 228, 231)',
    borderActive: 'black',
    inputHover: 'rgb(250, 250, 251)',
    secondaryBg: 'rgb(230, 230, 234)',
    secondaryLightBg: 'rgb(243, 243, 247)',
    secondaryFont: 'rgb(113, 113, 122)',
    secondaryLightFont: 'rgb(40, 40, 43)',
    buttonBg: 'black',
    buttonFont: 'white',
    buttonHover: 'rgb(47, 47, 49)',
    buttonDisabled: 'rgb(139, 139, 141)',
    icon: 'black',
    buttonIcon: 'white',
    errorFont: 'rgb(220, 38, 38)',
    errorBorder: 'rgb(220, 38, 38)',
    placeholderFont: 'rgb(133, 133, 139)',
  },
};
