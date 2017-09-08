import React, { Component } from 'react';
import Nav from './Nav/Nav';
import MainWords from './MainWords/MainWords.js';
import SearchBar from './SearchBar/SearchBar'
import { Grid, Row, Col } from 'react-material-responsive-grid';
import styles from './Homepage.css'

export default class Homepage extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Row>
            <Nav auth={this.props.auth} isHomepage={this.props.isHomepage}/>
          </Row>
          <Row className={styles.mainWords}>
            <MainWords />
          </Row>
          <Row>
            <SearchBar className={styles.searchBar} isHomepage={this.props.isHomepage}/>
          </Row>
        </Grid>
      </div>
    )
  }
}
