import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton'
import Auth from '../../Auth/Auth'
import Login from './Login'
import styles from './Nav.css'
import history from '../../Auth/history';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar.js'

class ButtonsToShow extends Component {
  render() {
    return(
      <div>
        <FlatButton label="Become a tutor" secondary={true} className={styles.otherButtons}/>
        <FlatButton label="Messages" secondary={true} className={styles.otherButtons}/>
        <FlatButton label="Help" secondary={true} className={styles.otherButtons}/>
      </div>
    )
  }
}


export default class Nav extends Component {

  render(){

    const buttonsToShow = (
      <div className={styles.ButtonStyle}>
        <ButtonsToShow />
        <Login {...this.props}/>
      </div>
    )

    return (
      this.props.isHomepage?
        <AppBar
          title={"tuutie"}
          className={styles.NavStyle}
          iconElementRight= {buttonsToShow}
        />
        :
        <AppBar
          className={styles.NavStyle}
          iconElementLeft={<SearchBar isHomepage={this.props.isHomepage}/>}
          iconElementRight= {buttonsToShow}
        />
    )
  }
}
