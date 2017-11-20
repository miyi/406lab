import React, { Component } from 'react';
//!!! --->withRouter here is kind of questionable
import {
  BrowserRouter as Router,
  Route,
  withRouter, 
} from 'react-router-dom';
import history from 'history/createBrowserHistory';
import styles from './App.css';

import Homepage from './Homepage/Homepage'
import Map from './map/Map';
import Callback from './Callback/Callback'
import New from './NewComponent/Facebook'

import injectTapEventPlugin from 'react-tap-event-plugin';
// import Auth from './Auth/Auth'
//Auth0
// const auth = new Auth();
// const handleAuthentication = (nextState, replace) => {
//   if (/access_token|id_token|error/.test(nextState.location.hash)) {
//     auth.handleAuthentication();
//   }
// }

// Temporary setting for material-ui
injectTapEventPlugin();



// for hmr to work I need the first class to extend Component
export class App extends Component {

  render() {
    return (
      <div className={styles.layout}>
        <Route exact path="/" render={(props) => <New/>} />
        <Route path="/map" component={Map} />
        <Route path="/new" component={New}/>
      </div>
    );
  }
}

export default withRouter(App);
