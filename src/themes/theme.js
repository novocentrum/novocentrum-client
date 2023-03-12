import { createTheme } from '@mui/material';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

export const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 1025, // Mobile
      md: 1026, // Desktop
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    text12m: {
      fontSize: 12,
      fontWeight: 500,
      lineHeight: '150%',
      letterSpacing: '0.5px',
    },
    text12sb: {
      fontSize: 12,
      fontWeight: 600,
      lineHeight: '200%',
      letterSpacing: '0.5px',
    },
    text14m: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: '200%',
      letterSpacing: '0.5px'
    },
    text16: {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: '150%',
      letterSpacing: '0.5px'
    },
    text16m: {
      fontSize: 16,
      fontWeight: 500,
      lineHeight: '150%',
      letterSpacing: '0.5px'
    },
    text16sb: {
      fontSize: 16,
      fontWeight: 600,
      lineHeight: '150%',
      letterSpacing: '0.5px'
    },
    text16b: {
      fontSize: 16,
      fontWeight: 700,
      lineHeight: '150%',
      letterSpacing: '0.5px'
    },
    text18: {
      fontSize: 18,
      fontWeight: 400,
      lineHeight: '150%',
      letterSpacing: '0.5px'
    },
    text18m: {
      fontSize: 18,
      fontWeight: 500,
      lineHeight: '150%',
      letterSpacing: '0.5px'
    },
    text18b: {
      fontSize: 18,
      fontWeight: 700,
      lineHeight: '150%',
      letterSpacing: '0.5px'
    },
    text26b: {
      fontSize: 26,
      fontWeight: 700,
      lineHeight: '150%',
      letterSpacing: '0.5px'
    },
    text40b: {
      fontSize: 40,
      fontWeight: 700,
      lineHeight: '150%',
      letterSpacing: '0.5px',
    },
    text48sb: {
      fontSize: 48,
      fontWeight: 600,
      lineHeight: '150%',
      letterSpacing: '0.5px',
    },
  },
});