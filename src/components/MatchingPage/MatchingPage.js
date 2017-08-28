import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import Map from '../map/Map';
import styles from './MatchingPage.css'
import Nav from '../Homepage/Nav/Nav'
import fakeProfileData from '../Menu/Cards/CardData'
import { Grid, Row, Col } from 'react-material-responsive-grid';


export default class MatchingPage extends Component {
  render() {
    return(
      <Grid>
        <Row>
          <Nav auth={this.props.auth} className={styles.nav}/>
        </Row>
        <Row>
          <Col sm={7}>
            <Menu profiles={fakeProfileData}/>
          </Col>
          <Col hiddenDown="xs" sm={5}>
            <Map profiles={fakeProfileData}/>
          </Col>
        </Row>
      </Grid>
    )
  }
}
