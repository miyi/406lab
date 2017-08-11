import React, { Component } from 'react';
import styles from './MainWords.css'

export default class MainWords extends Component {
  render(){
    return(
      <div className={styles.container}>
        <h1 className={styles.heading1}>
          406Lab
        </h1>
        <b1 className={styles.body1}>
          Get a tutor with only 3 clicks
        </b1>
      </div>
    )
  }
}
