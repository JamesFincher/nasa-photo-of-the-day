import React from 'react';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);

import './index.css';
import App from './App';

import { ThemeProvider } from 'styled-components';
import theme from './components/theme';
import { Reset } from 'styled-reset';

root.render(
  <ThemeProvider theme={theme}>
    <Reset />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
