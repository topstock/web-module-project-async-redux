import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reducer from './reducer/quotesReducer';
import { createStore } from 'redux';
import App from './App';
import './index.css';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
