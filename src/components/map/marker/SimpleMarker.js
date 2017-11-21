import React from 'react';
import compose from 'recompose/compose';
import defaultProps from 'recompose/defaultProps';

import { Motion } from 'react-motion';
import { clusterMarkerHOC } from './ClusterMarker.js';
import simpleMarkerStyles from './SimpleMarker.scss';

export const simpleMarker = ({
  styles,
  defaultMotionStyle, motionStyle,
}) => (
  <Motion
    defaultStyle={defaultMotionStyle}
    style={motionStyle}
  >
  {
    ({ scale }) => (
      <div
        className={styles.marker}
        style={{
          transform: `translate3D(0,0,0) scale(${scale}, ${scale})`,
        }}
      >
      </div>
    )
  }
  </Motion>
);

export const simpleMarkerHOC = compose(
  defaultProps({
    styles: simpleMarkerStyles,
    initialScale: 0.3,
    defaultScale: 0.6,
    hoveredScale: 0.7,
  }),
  clusterMarkerHOC
);

export default simpleMarkerHOC(simpleMarker);