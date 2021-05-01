import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import store from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,

  document.getElementById('root')
);
