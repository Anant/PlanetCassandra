import { createTheme } from '@mui/material/styles';
declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: React.CSSProperties['color'];
    };
  }

  interface PaletteColor {
    white?: string;
    blue?: string;
    darkblue?: string;
    orange?: string;
    turqoise?: string;
    darkerTurqoise?: string;
    darkCyan?: string;
  }

  interface SimplePaletteColorOptions {
    white?: string;
    blue?: string;
    darkblue?: string;
    orange?: string;
    turqoise?: string;
    darkerTurqoise?: string;
    darkCyan?: string;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      white: '#FFFFFF',
      main: '#383D3B',
      blue: '#163BBF',
      darkblue: '#344D67',
      orange: '#FFA62B',
      turqoise: '#5AB1BB',
      darkerTurqoise: '#488E96',
      darkCyan: '#326065',
    },
  },
});
export default theme;
