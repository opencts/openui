import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './vendor/assets/scss/_index.scss';
import DialogProvider from './vendor/services/DialogProvider';
import Store from './vendor/services/Store';

ReactDOM.render(
  <DialogProvider>
    <Store>
      <App />
    </Store>
  </DialogProvider>,
  document.getElementById('root')
);

