import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {grey400, redA200, redA100, redA700, darkBlack, grey50, white, grey300, cyan500, fullBlack} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import FlatButton from 'material-ui/FlatButton'
import Auth from '../../Auth/Auth'
import Login from './Login'
import styles from './Nav.css'
import history from '../../Auth/history';
import { Link } from 'react-router-dom';

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

class SignUp extends Component {
  render() {
    return(
      <FlatButton label="SignUp" secondary={true} className={styles.SignUpStyle}/>
    )
  }
}


export default class Nav extends Component {

  render(){

    const buttonsToShow = (
      <div className={styles.ButtonStyle}>
        <SignUp />
        <Login {...this.props}/>
      </div>
    )

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <AppBar
          title={this.props.isHomepage? "Lab406" : ""}
          className={styles.NavStyle}
          iconElementRight= {buttonsToShow}
        />
      </MuiThemeProvider>
    )
  }
}
