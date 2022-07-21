import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker'
import { store } from "./store/configureStore";
import { Provider } from "react-redux";
import { ThemeProvider } from 'styled-components';
import { baseTheme } from './styles/theme';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={baseTheme}>
      <React.StrictMode>
          <App/>
      </React.StrictMode>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister()
