import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div></div>;

class SimpleMap extends Component {

  // render() {
  //   return (
  //     <GoogleMapReact
  //       defaultCenter={this.props.center}
  //       defaultZoom={this.props.zoom}
  //     >
  //       <AnyReactComponent
  //         lat={49.2606052}
  //         lng={-123.2459938}
  //         text={'UBC'}
  //       />
  //     </GoogleMapReact>
  //   );
  // }
  render() {
    return (
      <GoogleMapReact
        style={this.props.style}
        center={this.props.center}
        zoom={this.props.zoom}
      >
      </GoogleMapReact>
    );
  }
}

SimpleMap.defaultProps = {
  center: {lat: 49.2606052, lng: -123.2459938},
  zoom: 10,
  style: {
    position: 'relative',
    margin: 0,
    padding: 0,
    flex: 1,
  }
};

export default SimpleMap;