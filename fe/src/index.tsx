import { UserProvider } from './common/user';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import { styledTheme as theme } from './common/styles/theme.styled';
import { GlobalStyle } from './common/styles/global.styled';

ReactDOM.render(
  <StrictMode>
    <UserProvider>
      <ThemeProvider {...{ theme }}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </UserProvider>
  </StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
