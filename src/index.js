import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material";
import { LogtoProvider, LogtoConfig, UserScope } from '@logto/react';

const config: LogtoConfig = {
  endpoint: 'https://4b1g34.logto.app/',
  appId: '03yl4cbjibqe5kybd83h2'
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <LogtoProvider config={config}>
        <StyledEngineProvider injectFirst>
          <App />
        </StyledEngineProvider>
      </LogtoProvider>
    </BrowserRouter>
);
reportWebVitals();
