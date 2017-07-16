import React, { Component } from 'react';
// import './App.css';
import s from './Layout.css';
import TestHead from './Header/TestHead'

class App extends Component {
  render() {
    return (
      <div className={s.root}>
        <TestHead/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
