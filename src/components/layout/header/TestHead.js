import React, { Component } from 'react'
import s from './Header.css'
import logo from './logo.svg'

class Header extends Component {
  render() {
    return (
	    <div className={s.header}>
	      <img src={logo} className={s.logo} alt="logo" />
	    </div>
    );
  }
}

export default Header