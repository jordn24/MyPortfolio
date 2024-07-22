import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 725,    // Small devices (phones)
      md: 940,    // Medium devices (tablets)
      lg: 1550,   // Large devices (desktops)
      xl: 1850,   // Extra large devices (large desktops)
    },
  },
});

export default theme;
