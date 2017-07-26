// import 'babel-polyfill'
// import registerServiceWorker from './registerServiceWorker';
// import ReactDOM from 'react-dom';
// import './index.css';
// // import 'bootstrap/dist/css/bootstrap.css';
// import { makeRoutes } from './components/App';


// const routes = makeRoutes();

// ReactDOM.render(
//   routes,
//   document.getElementById('root')
//);

import 'babel-polyfill'
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import 'normalize.css/normalize.css';
import registerServiceWorker from './registerServiceWorker';

render(<App />, document.getElementById('root'));
registerServiceWorker();