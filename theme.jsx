import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    // Tło i kolory podstawowe
    background: {
      primary: '#1E1E1E', 
      secondary: '#2D2D2D',
    },
    text: {
      primary: '#D4D4D4',  
      secondary: '#99f092', 
    },
    primary: {
      main: '#99f092',  
    },
    link: {
      main: '#16d108', 
      hover: '#99f092',
    },
    success: {
      main: '#34C755', 
    },
    warning: {
      main: '#F1BA61', 
    },
    icons: {
      main: '#16d108', 
      hover: '#99f092', 
    },
  
    color: '#16d108', 
  },
  components: {
  
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: '#16d108',
          '&:hover': {
            color: '#99f092',
          },
        },
      },
    },
   
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#9CD6FE',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#15B0FA',
          '&:hover': {
            color: '#99f092',
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: '#2D2D2D',
          color: '#15B0FA',
        },
      },
    },
  },
});

export default theme;
