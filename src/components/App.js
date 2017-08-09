import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import history from 'history/createBrowserHistory';

import styles from './App.css';
import Homepage from './Homepage/Homepage'
//Maptests
// import Map from './map/Map';
import Map from './map/Map.1.js';

import injectTapEventPlugin from 'react-tap-event-plugin';
// Temporary setting for material-ui
injectTapEventPlugin();

// for hmr to work I need the first class to extend Component
export class Layout extends Component {
  render() {
    return (

      <Router history={history}>
        <div className={styles.layout}>
          <Route exact path="/" component={Homepage} />
          <Route path="/map" component={Map} />
        </div>
      </Router>
    );
  }
}

export default Layout;
