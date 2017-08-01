import React, { Component } from 'react';
import Nav2 from './Nav2';
import MainWords from './MainWords/MainWords.js';
import SearchBar from './SearchBar/SearchBar'

export default class Homepage extends Component {
  render() {
    return(
      <div>
        <Nav2 />
        <MainWords />
        <SearchBar />
      </div>
    )
  }
}
