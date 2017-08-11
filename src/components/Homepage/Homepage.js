import React, { Component } from 'react';
import Nav from './Nav/Nav';
import MainWords from './MainWords/MainWords.js';
import SearchBar from './SearchBar/SearchBar'

export default class Homepage extends Component {
  render() {
    return(
      <div>
        <Nav auth={this.props.auth} isHomepage={this.props.isHomepage}/>
        <MainWords />
        <SearchBar />
      </div>
    )
  }
}
