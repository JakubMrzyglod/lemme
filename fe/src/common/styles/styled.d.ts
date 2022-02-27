import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    device: {
      xs: string;
      sm: string;
      lg: string;
    };
    color: {
      background: string;
      primary: string;
      secondary: string;
      gradient: string;
      text: { primary: string; secondary: string };
      dark: string;
      border: string;
      hover: string;
      table: {
        header: string;
        hover: string;
      };
    };
  }
}
