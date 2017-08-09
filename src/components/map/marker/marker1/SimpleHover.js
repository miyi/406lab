import React, { Component } from 'react';
import {Style, Hover} from './SimpleHoverStyle.js';
import PropTypes from 'prop-types';

export default class Marker extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const style = this.props.$hover ? Hover : Style;

    return (
       <div style={style}/>
    );
  }
}

Marker.propTypes = {
	// GoogleMap pass $hover props to hovered components
	// to detect hover it uses internal mechanism, explained in x_distance_hover example
	$hover: PropTypes.bool,
  text: PropTypes.string,
}
