import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './vendor/assets/scss/_index.scss';
import OuiProvider from './vendor/services/OuiProvider';

ReactDOM.render(
  <OuiProvider>
    <App />
  </OuiProvider>,
  document.getElementById('root')
);

