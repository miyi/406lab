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
import New from './NewComponent/facebook'

import injectTapEventPlugin from 'react-tap-event-plugin';
import Auth from './Auth/Auth'

//graphql imports
import { gql, graphql, compose } from 'react-apollo'

const FACEBOOK_APP_ID = 'v2.11'
const FACEBOOK_API_VERSION = '313774479106949'

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
export class App extends Component {

  render() {
    return (

      <Router history={history}>
        <div className={styles.layout}>
          <Route exact path="/" render={(props) => <Homepage auth={auth}/>} />
          <Route path="/map" component={Map} />
          <Route path="/new" component={New}/>
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} />
          }}/>
        </div>
      </Router>
    );
  }
}

export default App;
