import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

ReactDOM.render(
  <App initialData={window.initialData} />,
  document.getElementById('root')
);
