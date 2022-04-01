import { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { OrgProvider } from '../org';
import { UserProvider } from '../user';
import { styledTheme as theme } from '../styles/theme.styled';
import { GlobalStyle } from '../styles/global.styled';

export const CustomProviders: FC = ({ children }) => {
  return (
    <UserProvider>
      <OrgProvider>
        <ThemeProvider {...{ theme }}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </OrgProvider>
    </UserProvider>
  );
};
