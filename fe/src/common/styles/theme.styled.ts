const size = {
  xs: '576px',
  sm: '768px',
  lg: '1200px',
};

const color = {
  primary: '#5e72e4',
  secondary: '#825ee4',
  error: '#cd2553',
  background: '#1a1d21',
  text: { primary: '#D1D2D3', secondary: '#919193' },
  dark: '#121016',
  border: '#2a3641',
  hover: '#27242c',
  table: {
    header: '#19171d',
    hover: '#222529',
  },
};

export const styledTheme = {
  device: {
    xs: `@media screen and (min-width: ${size.xs})`,
    sm: `@media screen and (min-width: ${size.sm})`,
    lg: `@media screen and (min-width: ${size.lg})`,
  },
  color: {
    ...color,
    gradient: `linear-gradient(87deg, ${color.primary} 0, ${color.secondary} 100%)`,
  },
};
