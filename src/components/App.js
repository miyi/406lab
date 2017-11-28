import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  withRouter, 
} from 'react-router-dom';
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'

import getPosition from './HOC/geolocationHelper'
import withFacebookGCLoginHOC from './HOC/WithLogin'
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
  
  componentDidMount() {
    this._initializeFacebookSDK()
    this._getUserGeolocation()

  }
  _getUserGeolocation = async () => {
    const userCoordinates = await getPosition().then((pos) => {
      console.log(pos.coords)
      return pos.coords
    }).catch((err) => console.warn(err.message))
    
    this.setState({
      userGeolocation: {
        lat: userCoordinates.latitude,
        lng: userCoordinates.longitude,
      }
    })
    console.log('setState complete', this.state.userGeolocation)
  }
  _initializeFacebookSDK() {
    window.fbAsyncInit = function() {
      FB.init({
        appId      : FACEBOOK_APP_ID,
        cookie     : true,  // enable cookies to allow the server to access the session
        version    : FACEBOOK_API_VERSION // use Facebook API version 2.10
      });
    };
    // Load the SDK asynchronously
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }
  _handleFBLogin = () => {
    FB.login(response => {
      this._facebookCallback(response)
    }, {scope: 'public_profile,email'})
  }
  _facebookCallback = async facebookResponse => {
    if (facebookResponse.status === 'connected') {
      const facebookToken = facebookResponse.authResponse.accessToken
      const graphcoolResponse = await this.props.authenticateUserMutation({variables: { facebookToken }})
      const graphcoolToken = graphcoolResponse.data.authenticateUser.token
      localStorage.setItem('graphcoolToken', graphcoolToken)
      window.location.reload()
    } else {
      console.warn(`User did not authorize the Facebook application.`)
    }
  }
  _isLoading = () => {
    return this.props.data.loading
  }
  _isLoggedIn = () => {
    console.log(this.props.data)
    return this.props.data.loggedInUser && 
      this.props.data.loggedInUser.id && 
      this.props.data.loggedInUser.id !== ''
  }
  _logout = () => {
    localStorage.removeItem('graphcoolToken')
    window.location.reload()
  }

  render () {
    if (this._isLoading()) {
      return <Load_2 />
    } else {
      if (this._isLoggedIn()) {
        return this.renderLoggedIn()
      } else {
        return this.renderLoggedOut()
      }
    }
  }
  renderLoggedIn() {
    return (
      <div>
        <span>
          Logged in as ${this.props.data.loggedInUser.id}
        </span>
        <div className='pv3'>
          <span
            className='dib bg-red white pa3 pointer dim'
            onClick={this._logout}
          >logout
					</span>
					<div></div>
          <span onClick={this.props._returnOpposite}>click me!</span>
        </div>

      </div>
    )
  }

  renderLoggedOut() {
    return (
      <div>
        <div className='pv3'>
          <div>
            <span
              onClick={this._handleFBLogin}
              className='dib pa3 white bg-blue dim pointer'
            >
              Log in with Facebook
            </span>
          </div>
          <span>Log in to create new posts</span>
        </div>
      </div>
    )
  }
}

const LOGGED_IN_USER = gql`
query LoggedInUser {
  loggedInUser {
    id
    firstName
    lastName
    profilePic
  }
}
`

const AUTHENTICATE_FACEBOOK_USER = gql`
mutation AuthenticateUserMutation($facebookToken: String!) {
  authenticateUser(facebookToken: $facebookToken) {
    token
  }
}
`

export default compose(
  graphql(AUTHENTICATE_FACEBOOK_USER, { name: 'authenticateUserMutation' }),
  graphql(LOGGED_IN_USER, { options: { fetchPolicy: 'network-only'}}),
  withFacebookGCLoginHOC,
) (withRouter(App))
