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
import history from 'history/createBrowserHistory';
import styles from './App.css';

import Homepage from './Homepage/Homepage'
import Map from './map/Map';
import Callback from './Callback/Callback'
// import Layout from './layout/Layout'
import injectTapEventPlugin from 'react-tap-event-plugin';
import Auth from './Auth/Auth'

// Temporary setting for material-ui
injectTapEventPlugin();

//Auth0
const auth = new Auth();
const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

// for hmr to work I need the first class to extend Component
export class Layout extends Component {
  render() {
    return (

      <Router history={history}>
        <div className={styles.layout}>
          <Route exact path="/" render={(props) => <Homepage auth={auth}/>} />
          <Route path="/map" component={Map} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} />
          }}/>
        </div>
      </Router>
    );
  }
}

export default Layout;
