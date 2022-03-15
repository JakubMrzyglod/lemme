import { UserProvider } from './common/user';
import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { styledTheme as theme } from './common/styles/theme.styled';
import { GlobalStyle } from './common/styles/global.styled';

ReactDOM.render(
  <StrictMode>
    <UserProvider>
      <ThemeProvider {...{ theme }}>
        <GlobalStyle />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </UserProvider>
  </StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
