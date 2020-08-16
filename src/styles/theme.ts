const defaultTheme = {
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif`,
  fontSize: `1rem`,
  lineHeight: `1.4`,
};

const darkColors = {
  backgroundColor: `#272643`,
  borderColor: `#f6fafd`,
  textColor: `#f6fafd`,
  logo: {
    pathColor: `#e5e5e5`,
    rectColor: `#f6fafd`,
  },
};

const lightColors = {
  backgroundColor: `#f6fafd`,
  borderColor: `#2c698d`,
  textColor: `#272643`,
  logo: {
    pathColor: `#272643`,
    rectColor: `#2c698d`,
  },
};

export const theme = {
  dark: { ...defaultTheme, ...darkColors },
  light: { ...defaultTheme, ...lightColors },
};
