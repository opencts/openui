import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/scss/_index.scss';
import DialogProvider from './services/DialogProvider';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Admin from './views/Admin';

ReactDOM.render(
  <DialogProvider>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <App />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
      </Switch>
    </BrowserRouter>
  </DialogProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
