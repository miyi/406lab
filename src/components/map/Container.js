import React, { Component } from 'react';
import s from './Container.css';
import Map from './Map';

// const Initcenter = Geolocation.getCurrentPosition();
// navigator.geolocation.getCurrentPosition(showPosition)

export class Container extends Component {
  render() {
    return (
      <Map />
    );
  }
}

