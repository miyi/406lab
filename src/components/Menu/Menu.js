import React, { Component } from 'react';
import {GridList} from 'material-ui/GridList';
import SingleCard from './Cards/SingleCard'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 'auto',
    overflowY: 'auto',
    padding: 30,
  },
};

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: this.props.profiles
    }
  }

  render() {
    const cards = this.state.cards;

    return(
      <div style={styles.root}>
        <GridList
          cols={3}
          cellHeight={'auto'}
          style={styles.gridList}
          padding={30}
        >
          { cards.map(({id, ...cardProps}) => <SingleCard {...cardProps} key={id} /> )}
        </GridList>
      </div>
    );
  }
}
