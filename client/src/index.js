import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store'
import { ThemeProvider } from '@material-ui/styles'
import { theme } from './theme';

render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
document.getElementById('root'));