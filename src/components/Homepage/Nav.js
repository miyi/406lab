import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {grey400, redA200, redA100, redA700, darkBlack, grey50, white, grey300, cyan500, fullBlack} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import FlatButton from 'material-ui/FlatButton'
import Auth from '../../Auth/Auth.js';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
 const muiTheme = getMuiTheme({
 palette: {
   primary1Color: white,
    primary2Color: grey50,
    primary3Color: grey400,
    accent1Color: redA200,
    accent2Color: redA100,
    accent3Color: redA700,
    textColor: darkBlack,
    alternateTextColor: darkBlack,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: cyan500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },

 appBar: {
   height: 50,
 },
 })

 const loginStyle = {
   margin: 6
 }


 const auth = new Auth();
 auth.login();

class Login extends Component {
  render() {
    return(
      <FlatButton label="Login" secondary={true} style={loginStyle} />
    )
  }
}

class SignUp extends Component {
  render() {
    return(
      <FlatButton label="SignUp" secondary={true} style={loginStyle} />
    )
  }
}

const buttonsToShow = (
  <div>
    <SignUp />
    <Login />
  </div>
)

class Nav extends Component {

  render(){
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <AppBar
          title="Lab406"
          iconElementRight= {buttonsToShow}
        />
      </MuiThemeProvider>
    )
  }
}

export default Nav;
