// import React from 'react'
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom'
// import history from 'history/createBrowserHistory'

// import 'normalize.css/normalize.css'
// import s from './App.css'
// import Layout from './layout/Layout'
// import Trial from './map/Trial'

// export const makeRoutes = () => (
//   <Router history={history}>
//     <div className={s.map}>
//       <Route exact path='/' component={Trial}/>
//     </div>
//   </Router>
// )

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import histroy from 'history/createBrowserHistory'
import Homepage from './Homepage/Homepage' //import homepage

import './App.css';
// import Map from './map/Map';
import Map from './map/Map'
// import Layout from './layout/Layout'
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
// Temporary setting for material-ui

// for hmr to work I need the first class to extend Component
export class Layout extends Component {
  render() {
    return (
      <Router>
        <div className="layout">
          <Route exact path="/" component={Homepage} />
          <Route path="/map" component={Map} />
        </div>
      </Router>
    );
  }
}

export default Layout;
