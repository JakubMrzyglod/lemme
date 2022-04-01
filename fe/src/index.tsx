import { UserProvider } from './common/user';
import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { CustomProviders } from './common/provider';

ReactDOM.render(
  <StrictMode>
    <CustomProviders>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CustomProviders>
  </StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
