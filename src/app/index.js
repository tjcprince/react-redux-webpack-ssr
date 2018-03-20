import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Root from './pages/Root';
import createStore from './store/createStore';

const store = createStore(window.__INITIAL_STATE__); // eslint-disable-line no-underscore-dangle

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Component />
      </Router>
    </Provider>,
    document.getElementById('root')
  );
};

render(Root);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./pages/Root', () => {
    /* eslint-disable global-require */
    const Routes = require('./pages/Root').default; // 动态路由，热加载写法
    render(Routes);
  });
}
