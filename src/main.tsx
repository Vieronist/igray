import { MantineProvider } from '@mantine/core';

import '@mantine/core/styles.css';

import ReactDOM from 'react-dom/client';
import { Router } from './app/providers/router/routes';
import { theme } from './theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <MantineProvider theme={theme}>
    <Router />
  </MantineProvider>
);
