import React, { Component } from 'react';
import {GridList} from 'material-ui/GridList';
import SingleCard from './Cards/SingleCard'
import { Grid, Row, Col } from 'react-material-responsive-grid';
// import styles from './Dashboard.css'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 'auto',
    overflowY: 'scroll',
    height: '887',
    padding: '15',
    paddingRight: '20',
    paddingLeft: '30',
  },
};

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: this.props.profiles,
      numOfCardsToShow: 0,

    }
  }

  render() {
    const cards = this.state.cards;


    return(
      // <Grid className={styles.container}>
      //   <Row>
      //     { cards.map(({id, ...cardProps}) =>
      //     <Col>
      //       <SingleCard {...cardProps} key={id} />
      //     </Col>
      //     )}
      //   </Row>
      // </Grid>
      <div style={styles.root}>
        <GridList
          cols={3}
          cellHeight={'auto'}
          style={styles.gridList}
          padding={15}
        >
          { cards.map(({id, ...cardProps}) => <SingleCard {...cardProps} key={id} /> )}
        </GridList>
      </div>
    );
  }
}
