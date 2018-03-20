import React from 'react';
import PropTypes from 'prop-types';
import appConfig from '../../app/config';

export default class Html extends React.PureComponent {
  static propTypes = {
    store: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    assets: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    content: PropTypes.string.isRequired
  };

  render() {
    const { store, assets, content } = this.props;

    const { isProd } = appConfig;
    const initialState = `window.__INITIAL_STATE__ = ${JSON.stringify(store.getState())}`;

    return (
      <html lang="en">
        <head>
          <link
            href={assets.styles.main}
            media="screen, projection"
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
          />
        </head>
        <body>
          <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
          <script dangerouslySetInnerHTML={{ __html: initialState }} />
          {isProd && <script src={assets.javascript.vendor} />}
          <script src={assets.javascript.main} />
        </body>
      </html>
    );
  }
}
