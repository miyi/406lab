import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton'
import Auth from '../Auth'
import Logout from './Logout'

export default class Login extends Component {
  login() {
    this.props.auth.login();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return(
      !isAuthenticated()?
        <FlatButton
          label="Login"
          secondary={true}
          onClick={this.login.bind(this)}
        />
      :
      <Logout {...this.props}/>
    )
  }
}
