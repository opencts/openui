import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './vendor/assets/scss/_index.scss';
import ClientDBProvider from './vendor/services/ClientDBProvider';
import DialogProvider from './vendor/services/DialogProvider';

ReactDOM.render(
  <DialogProvider>
    <ClientDBProvider>
      <App />
    </ClientDBProvider>
  </DialogProvider>,
  document.getElementById('root')
);

