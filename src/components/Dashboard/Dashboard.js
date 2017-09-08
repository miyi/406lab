import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import Map from '../map/Map';
import styles from './Dashboard.css'
import Nav from '../Homepage/Nav/Nav'
import fakeProfileData from '../Menu/Cards/CardData'
import { Grid, Row, Col } from 'react-material-responsive-grid';

export default class Dashboard extends Component {
  render() {
    return(
      <Grid marginless={true}>
          <Row>
            <Nav auth={this.props.auth} className={styles.nav}/>
          </Row>
          <Row>
            <Col className={styles.col} sm={12} md={8}>
              <Menu profiles={fakeProfileData}/>
            </Col>
            <Col className={styles.col} sm={12} md={4} first={["xs", "sm"]} last={["md", "lg"]}>
              <Map profiles={fakeProfileData}/>
            </Col>
          </Row>
      </Grid>
    )
  }
}
