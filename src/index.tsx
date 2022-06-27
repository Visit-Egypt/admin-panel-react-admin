/** @jsxRuntime classic */
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'proxy-polyfill';
// IE11 needs "jsxRuntime classic" for this initial file which means that "React" needs to be in scope
// https://github.com/facebook/create-react-app/issues/9906

import React from 'react';
import ReactDOM  from 'react-dom/client';

// import * as React from 'react';
// import ReactDOM from 'react-dom';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as any);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>  
);
 