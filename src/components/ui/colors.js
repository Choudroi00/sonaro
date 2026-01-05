module.exports = {
  white: '#ffffff',
  black: '#000000',
  transparent: 'transparent',
  // Brand Colors
  primary: {
    DEFAULT: '#FF6D00', // Primary Orange
    foreground: '#FFFFFF',
    50: '#FFF0E0',
    100: '#FFE2CC',
    200: '#FFC499',
    300: '#FFA766',
    400: '#FF8933',
    500: '#FF6D00',
    600: '#CC5700',
    700: '#994100',
    800: '#662C00',
    900: '#331600',
  },
  secondary: {
    DEFAULT: '#0B3056', // Primary Blue
    foreground: '#FFFFFF',
    50: '#E6EAED',
    100: '#C0CAD3',
    200: '#99AAB8',
    300: '#738A9E',
    400: '#4C6A83',
    500: '#264A69',
    600: '#0B3056', // Base
    700: '#092645',
    800: '#071D34',
    900: '#041322',
  },
  tertiary: {
    DEFAULT: '#1E4C7A', // Secondary Blue
    foreground: '#FFFFFF',
  },
  accent: {
    DEFAULT: '#4DD0E1',
    100: '#E0F7FA',
    200: '#B2EBF2',
    300: '#80DEEA',
    400: '#4DD0E1',
  },
  // Functional Colors
  error: {
    DEFAULT: '#FF0000',
    foreground: '#FFFFFF',
  },
  success: {
    DEFAULT: '#1B5E20', // Dark Green
    foreground: '#FFFFFF',
  },
  warning: {
    DEFAULT: '#D4E157', // Lime (Caution / Score)
    foreground: '#000000',
  },
  text: {
    primary: '#000000',
    inverse: '#FFFFFF',
    secondary: '#666666',
    tertiary: '#B0BEC5',
  },
  // Keep some neutrals for general UI
  neutral: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#F0EFEE',
    300: '#D4D4D4',
    400: '#A3A3A3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  },
  charcoal: {
    50: '#F2F2F2',
    100: '#E5E5E5',
    200: '#C9C9C9',
    300: '#B0B0B0',
    400: '#969696',
    500: '#7D7D7D',
    600: '#616161',
    700: '#474747',
    800: '#383838',
    850: '#2E2E2E',
    900: '#1E1E1E',
    950: '#121212',
  },
  danger: {
    // Keeping danger as alias to error or separate if existing code uses it
    DEFAULT: '#FF0000',
    50: '#FEF2F2',
    500: '#EF4444',
  },
};
