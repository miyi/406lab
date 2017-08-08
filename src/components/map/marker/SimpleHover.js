import React, { Component } from 'react';
// import shouldPureComponentUpdate from 'react-pure-render/function';
import {Style, Hover} from './SimpleHoverStyle.js';
import PropTypes from 'prop-types';

export default class Marker extends Component {
	
	// shouldComponentUpdate = shouldPureComponentUpdate;

  constructor(props) {
    super(props);
  }

  render() {
    const style = this.props.$hover ? Hover : Style;

    return (
       <div style={style}>
          {this.props.text}
       </div>
    );
  }
}

Marker.propTypes = {
	// GoogleMap pass $hover props to hovered components
	// to detect hover it uses internal mechanism, explained in x_distance_hover example
	$hover: PropTypes.bool,
  text: PropTypes.string,
}
