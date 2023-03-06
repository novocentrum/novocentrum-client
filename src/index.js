import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {theme} from '../src/themes/theme'
import {ThemeProvider} from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
