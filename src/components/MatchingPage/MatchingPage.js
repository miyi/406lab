import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import Map from '../map/Map';
import styles from './MatchingPage.css'
import { Container, Row, Col } from 'react-grid-system'
import TestingPage from '../testingPage'
import SplitPane from 'react-split-pane'
import Nav from '../Homepage/Nav/Nav'

export default class MatchingPage extends Component {
  render() {
    return(
      <SplitPane split="horizontal" defaultSize={'5%'} pane2Style={{width:'100%'}}>
          <Nav auth={this.props.auth}/>
        <SplitPane split="vertical" defaultSize={'70%'}>
           <div>
             <Menu />
           </div>
           <div>
             <Map />
           </div>
       </SplitPane>
      </SplitPane>
    )
  }
}
