import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import { theme } from './theme';
import { AppContextProvider } from './context/AppContext';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider theme={theme}>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </ConfigProvider>
  </React.StrictMode>
);
