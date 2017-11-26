import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';

import config from './config';
import App from './src/components/app';

const serverRender = () =>
  axios.get(`${config.serverUrl}/api/contests`)
    .then(resp => {
      return ReactDOMServer.renderToString(
        <App initialContests={resp.data.contests} />
      );
    });

export default serverRender;
