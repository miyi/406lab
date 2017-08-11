import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {grey400, redA200, redA100, redA700, darkBlack, grey50, white, grey300, cyan500, fullBlack} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton'
import Auth from '../../Auth/Auth'
import Logout from './Logout'
import Styles from './Nav.css'

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
