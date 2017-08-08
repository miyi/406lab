import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import history from 'history/createBrowserHistory';

import styles from './App.css';
import Map from './map/Map';

import Homepage from './Homepage/Homepage'


import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
// Temporary setting for material-ui

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
