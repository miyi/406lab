import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import fakeProfileData from '../../Menu/Cards/CardData'
import { Grid, Row, Col } from 'react-material-responsive-grid';
import styles from '../Dashboard.css'
import Menu from '../../Menu/Menu.js'
import Map from '../../map/Map';

export default class NavTabs extends Component {
  render(){
    return(
      <Tabs initialSelectedIndex={1} zDepth={1}>
        <Tab label="FOR YOU" style={{fontColor:'rgb(255, 167, 38)'}}>
          <h1>
            Hi this is TAB #1
          </h1>
        </Tab>
        <Tab label="TUTOR" >
          <Row>
            <Col className={styles.col} sm={12} md={8}>
              <Menu profiles={fakeProfileData}/>
            </Col>
            <Col className={styles.col} sm={12} md={4} first={["xs", "sm"]} last={["md", "lg"]}>
              <Map profiles={fakeProfileData}/>
            </Col>
          </Row>
        </Tab>
        <Tab label="COMPETITION">
          <h1>
            Hi this is TAB #3
          </h1>
        </Tab>
      </Tabs>
    )
  }
}
