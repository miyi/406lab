import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import history from 'history/createBrowserHistory';
import styles from './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {grey400, teal800, orange400, teal300, darkBlack, grey600, grey800, grey50, white, grey300, cyan500, fullBlack} from 'material-ui/styles/colors';

import Homepage from './Homepage/Homepage'
import Map from './map/Map';
import MatchingPage from './MatchingPage/MatchingPage'
import Callback from './Callback/Callback'

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

const muiTheme = getMuiTheme({
palette: {
   primary1Color: white,
   primary2Color: orange400,
   primary3Color: teal300,
   accent1Color: grey600,
   accent2Color: grey400,
   accent3Color: grey800,
   alternateTextColor: orange400,
 },

appBar: {
  height: 50,
},
})

// for hmr to work I need the first class to extend Component
export class Layout extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Router history={history}>
          <div className={styles.layout}>
            <Route exact path="/" render={(props) => <Homepage auth={auth} isHomepage={true}/>} />
            <Route path="/matchingPage" render={(props) => <MatchingPage auth={auth} isHomepage={false}/>} />
            <Route path="/callback" render={(props) => {
              handleAuthentication(props);
              return <Callback {...props} />
            }}/>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default Layout;
