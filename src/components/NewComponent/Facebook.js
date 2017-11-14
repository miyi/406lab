import React from 'react'
import { withRouter } from 'react-router-dom'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton'
import 'tachyons'

const styles = {
  button: {
    margin: 12,
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 10,
    bottom: 5,
    right: 10,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};

const FACEBOOK_APP_ID = '848421905339031'
const FACEBOOK_API_VERSION = 'v2.11' // e.g. v2.10

class App extends React.Component {

  componentDidMount() {
    this._initializeFacebookSDK()
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
      console.log('facebooktoken: ',facebookToken)
      const graphcoolResponse = await this.props.authenticateUserMutation({variables: { facebookToken }})
      console.log('graphcoolRes: ', graphcoolResponse)
      const graphcoolToken = graphcoolResponse.data.authenticateUser.token
      console.log('graphcoolToken: ', graphcoolToken)
      localStorage.setItem('graphcoolToken', graphcoolToken)
      window.location.reload()
    } else {
      console.warn(`User did not authorize the Facebook application.`)
    }
  }

  _isLoggedIn = () => {
    return this.props.data.loggedInUser && 
      this.props.data.loggedInUser.id && 
      this.props.data.loggedInUser.id !== ''
  }

  _logout = () => {
    localStorage.removeItem('graphcoolToken')
    window.location.reload()
  }


  render () {
		console.log('rendering')
    if (this._isLoggedIn()) {
			return this.renderLoggedIn()
			console.log('logged in')
    } else {
			return this.renderLoggedOut()
			console.log('not logged in')
    }

  }

  renderLoggedIn() {
    return (
      <div>
        <span>
          Logged in as ${this.props.data.loggedInUser.id}
        </span>
        <div className='s.pv3'>
          <span
            className='s.dib s.bg-red s.white s.pa3 s.pointer s.dim'
            onClick={this._logout}
          >
            Logout
          </span>
				</div>
				<div>Already logged In</div>
      </div>
    )
  }

  renderLoggedOut() {
    return (
      <MuiThemeProvider>
        <div>
          <div className='pv3'>
            <div>
              <RaisedButton
                backgroundColor="#3b5998"
                label="facebook login"
                labelColor="#ffffff"
                style={styles}
                onClick={this._handleFBLogin}
              />
              <span
                onClick={this._handleFBLogin}
                className='s.dib s.pa3 s.white s.bg-blue s.dim pointer'
              >
                Log in with Facebook
              </span>
            </div>
            <span>Log in to create new posts</span>
          </div>
          <div>please login</div>
        </div>
      </MuiThemeProvider>
    )
  }
}

const LOGGED_IN_USER = gql`
  query LoggedInUser {
    loggedInUser {
      id
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
  graphql(LOGGED_IN_USER, { options: { fetchPolicy: 'network-only'}})
) (withRouter(App))
