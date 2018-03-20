import React from 'react';
import { renderToString } from 'react-dom/server';
import StaticRouter from 'react-router-dom/StaticRouter';
import { Provider } from 'react-redux';
import { matchRoutes } from 'react-router-config';
import Html from './html';
import routes from '../../app/routes';
import Root from '../../app/pages/Root';

import createStore from '../../app/store/createStore';

const store = createStore();

export default function createSSR(assets) {
  return (req, res) => {
    const branch = matchRoutes(routes, req.url);
    const promises = branch.map(({ route }) => {
      const fetchData = route.fetchData; // 预加载
      return fetchData instanceof Function ? fetchData(store) : Promise.resolve(null);
    });
    return Promise.all(promises).then((data) => {
      const context = {};
      const content = renderToString(
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            <Root />
          </StaticRouter>
        </Provider>
      );
      if (context.status === 404) {
        res.status(404);
      }
      const renderContent = renderToString(<Html {...{ store, content, assets }} />);

      res.send(`<!doctype html>\n${renderContent}`);
    });
  };
}
