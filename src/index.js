import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter} from 'react-router-dom';
import './index.css';
import AppRoutes from './Routes/AppRoutes';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import i18n from './services/i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <AppRoutes />
        {/* <App /> */}
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
