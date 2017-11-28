import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  withRouter, 
} from 'react-router-dom';
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'

import { FACEBOOK_API_VERSION, FACEBOOK_APP_ID } from '../../constants'

// const withLoginTest = (App) => (
// 	class WithLogin extends Component {
// 		constructor(props) {
// 			super(props)
// 			this.state ={
// 				time: new Date(),
// 			}
// 			this._returnOpposite = this._returnOpposite.bind(this)
// 		}
// 		componentDidMount() {
// 			this.timerID = setInterval(
// 				() => this.tick(),
// 				1000
// 			);
// 		}
// 		componentWillUnmount() {
// 			clearInterval(this.timerID);
// 		}
// 		tick() {
// 			this.setState({
// 				time: new Date()
// 			});
// 		}
// 		_returnOpposite = () => {
// 			console.log(42)
// 		}
// 		render() {
// 			const newProps = {
// 				time: this.state.time.toLocaleTimeString(),
// 				opposite: this._returnOpposite
// 			}

// 			return <App {...this.props} {...newProps}/>
// 		}
// 	}
// )

// export { withLoginTest }

// const withFacebookGCLoginHOC = (App) => (
// 	class WithLogin extends Component {
// 		constructor(props) {
// 			super(props)
// 			// this._isLoading = this._isLoading().bind(this)
// 			// this._isLoggedIn = this._isLoggedIn().bind(this)
// 			// this._logout = this._logout().bind(this)
// 			// this._handleFBLogin = this._handleFBLogin().bind(this)
// 		}
// 		componentDidMount() {
// 			this._initializeFacebookSDK()
// 		}
// 		_initializeFacebookSDK() {
// 			window.fbAsyncInit = function() {
// 				FB.init({
// 					appId      : FACEBOOK_APP_ID,
// 					cookie     : true,  // enable cookies to allow the server to access the session
// 					version    : FACEBOOK_API_VERSION // use Facebook API version 2.10
// 				});
// 			};
// 			// Load the SDK asynchronously
// 			(function(d, s, id) {
// 				var js, fjs = d.getElementsByTagName(s)[0];
// 				if (d.getElementById(id)) return;
// 				js = d.createElement(s); js.id = id;
// 				js.src = "//connect.facebook.net/en_US/sdk.js";
// 				fjs.parentNode.insertBefore(js, fjs);
// 			}(document, 'script', 'facebook-jssdk'));
// 		}
// 		_handleFBLogin = () => {
// 			FB.login(response => {
// 				this._facebookCallback(response)
// 			}, {scope: 'public_profile,email'})
// 		}
// 		_facebookCallback = async facebookResponse => {
// 			if (facebookResponse.status === 'connected') {
// 				const facebookToken = facebookResponse.authResponse.accessToken
// 				const graphcoolResponse = await this.props.authenticateUserMutation({variables: { facebookToken }})
// 				const graphcoolToken = graphcoolResponse.data.authenticateUser.token
// 				localStorage.setItem('graphcoolToken', graphcoolToken)
// 				window.location.reload()
// 			} else {
// 				console.warn(`User did not authorize the Facebook application.`)
// 			}
// 		}
// 		_isLoading = () => {
// 			return this.props.data.loading
// 		}
// 		_isLoggedIn = () => {
// 			return this.props.data.loggedInUser && 
// 				this.props.data.loggedInUser.id && 
// 				this.props.data.loggedInUser.id !== ''
// 		}
// 		_logout = () => {
// 			localStorage.removeItem('graphcoolToken')
// 			window.location.reload()
// 		}
// 		render() {
// 			const newProps = {
// 				isLoading: this._isLoading(),
// 				isLoggedIn: this._isLoggedIn(),
// 				handleFBLogin: this._handleFBLogin(),
// 				logout: this._logout(),
// 			}
// 			return <App {...this.props} {...this.newProps} />
// 		}
// 	}
// )
// const withFacebookGCLoginHOC = (App) => (
// 	class WithLogin extends Component {
// 		constructor(props) {
// 			super(props)
// 			// this._isLoading = this._isLoading().bind(this)
// 			// this._isLoggedIn = this._isLoggedIn().bind(this)
// 			// this._logout = this._logout().bind(this)
// 			// this._handleFBLogin = this._handleFBLogin().bind(this)
// 		}
// 		componentDidMount() {
// 			this._initializeFacebookSDK()
// 		}
// 		_initializeFacebookSDK() {
// 			window.fbAsyncInit = function() {
// 				FB.init({
// 					appId      : FACEBOOK_APP_ID,
// 					cookie     : true,  // enable cookies to allow the server to access the session
// 					version    : FACEBOOK_API_VERSION // use Facebook API version 2.10
// 				});
// 			};
// 			// Load the SDK asynchronously
// 			(function(d, s, id) {
// 				var js, fjs = d.getElementsByTagName(s)[0];
// 				if (d.getElementById(id)) return;
// 				js = d.createElement(s); js.id = id;
// 				js.src = "//connect.facebook.net/en_US/sdk.js";
// 				fjs.parentNode.insertBefore(js, fjs);
// 			}(document, 'script', 'facebook-jssdk'));
// 		}
// 		_handleFBLogin = () => {
// 			FB.login(response => {
// 				this._facebookCallback(response)
// 			}, {scope: 'public_profile,email'})
// 		}
// 		_facebookCallback = async facebookResponse => {
// 			if (facebookResponse.status === 'connected') {
// 				const facebookToken = facebookResponse.authResponse.accessToken
// 				const graphcoolResponse = await this.props.authenticateUserMutation({variables: { facebookToken }})
// 				const graphcoolToken = graphcoolResponse.data.authenticateUser.token
// 				localStorage.setItem('graphcoolToken', graphcoolToken)
// 				window.location.reload()
// 			} else {
// 				console.warn(`User did not authorize the Facebook application.`)
// 			}
// 		}
// 		_isLoading = () => {
// 			return this.props.data.loading
// 		}
// 		_isLoggedIn = () => {
// 			return this.props.data.loggedInUser && 
// 				this.props.data.loggedInUser.id && 
// 				this.props.data.loggedInUser.id !== ''
// 		}
// 		_logout = () => {
// 			localStorage.removeItem('graphcoolToken')
// 			window.location.reload()
// 		}
// 		render() {
// 			const newProps = {
// 				isLoading: this._isLoading(),
// 				isLoggedIn: this._isLoggedIn(),
// 				handleFBLogin: this._handleFBLogin(),
// 				logout: this._logout(),
// 			}
// 			return <App {...this.props} {...this.newProps} />
// 		}
// 	}
// )

class WithLogin extends Component {
	
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

export default WithLogin

