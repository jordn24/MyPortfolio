import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import './assets/css/main.css'

import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/customTheme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ThemeProvider theme={theme}>
    <Router>
      <App />
    </Router>
    </ThemeProvider>
);