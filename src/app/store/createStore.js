import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import combineReducers from './reducer';

export default (initialState = {}) => {
  const middlewares = [thunk];

  const enhancers = [];

  // if (process.env.NODE_ENV === 'development') {
  //   const devToolsExtension = window.devToolsExtension;
  //   if (typeof devToolsExtension === 'function') {
  //     enhancers.push(devToolsExtension());
  //   }
  // }

  const store = createStore(
    combineReducers,
    initialState,
    compose(applyMiddleware(...middlewares), ...enhancers)
  );

  if (module.hot) {
    module.hot.accept('./reducer', () => {
      /* eslint-disable global-require */
      const createNextReducer = require('./reducer');
      const nextReducer = createNextReducer();

      store.replaceReducer(nextReducer);
    });
  }
  return store;
};
