import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import ModeProvider from './Components/Context/Mode/functionMode';
import SettingsProvider from './Components/Context/Settings';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <SettingsProvider>

        <ModeProvider>
          <App />
        </ModeProvider>
      </SettingsProvider>
    </MantineProvider>
  </React.StrictMode>
);

