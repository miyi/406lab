import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton'
import Auth from '../../Auth/Auth'
import Login from './Login'
import styles from './Nav.css'
import history from '../../Auth/history';
import { Link } from 'react-router-dom';

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
        <AppBar
          title={this.props.isHomepage? "Tuutie" : ""}
          className={styles.NavStyle}
          iconElementRight= {buttonsToShow}
        />
    )
  }
}
