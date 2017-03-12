import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { AppContainer } from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR

import App from './components/App/App.jsx';
import store from './store/index.jsx';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(store)} >
      <App />
  </Provider>, document.querySelector('.container'),
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept(App, () => {
    render(App)
  });
}
