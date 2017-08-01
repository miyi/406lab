import React, { Component } from 'react';
import Nav from './Nav';
import MainWords from './MainWords/MainWords.js';
import SearchBar from './SearchBar/SearchBar'

export default class Homepage extends Component {
  render() {
    return(
      <div>
        <Nav />
        <MainWords />
        <SearchBar />
      </div>
    )
  }
}
