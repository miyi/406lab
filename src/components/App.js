import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  withRouter, 
} from 'react-router-dom';
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'

import getPosition from './HOC/geolocationHelper'
import withFacebookGCLogin, { withLoginTest } from './HOC/WithLogin'
import history from 'history/createBrowserHistory';
import styles from './App.css';
import Map from './map/Map';
import {Load_1, Load_2} from './loading/LoadWindow'
import New from './NewComponent/Facebook'

import { FACEBOOK_API_VERSION, FACEBOOK_APP_ID } from '../constants'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { 
      userGeolocation: {lat: 49.2606052, lng: -123.2459938},
      userInfo: null
   }
  }

  render () {
    console.log(this.props.data)
    if (this.props.isLoggedIn) {
      return <div>is logged in</div>
    } else {
      return <div>is not logged in </div>
    }
  }
}

export default compose(
  withFacebookGCLogin,
) (withRouter(App))

