// import React from 'react';
// import ReactDOM from 'react-dom';
// import 'babel-polyfill'
// import './index.css';
// // import App from './components/App';
// import registerServiceWorker from './registerServiceWorker';

// //test
// // import Basic from './components/Basic.js';
// import makeRoutes from  './routes/ExampleRoute'

// const route = makeRoutes();

// ReactDOM.render(route, document.getElementById('root'));
// registerServiceWorker();


import ReactDOM from 'react-dom';
import './index.css';
// import 'bootstrap/dist/css/bootstrap.css';
import { makeRoutes } from './routes/AuthRoute';

const routes = makeRoutes();

ReactDOM.render(
  routes,
  document.getElementById('root')
);
