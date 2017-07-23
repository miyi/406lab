import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapProps: {
        center: { lat: 49.2606052, lng: -123.2459938 },
        zoom: 15,
        bounds: '',
      },
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(newMapProps) {
    this.setState({
      mapProps: newMapProps,
    });
  }

  render() {
    const center = this.state.mapProps.center;
    const zoom = this.state.mapProps.zoom;
    return (
      <GoogleMapReact
        center={center}
        zoom={zoom}
        style={this.props.style}
        options={this.props.options}
        onChange={this.onChange}
      />
    );
  }
}

Map.defaultProps = {
  style: {
    position: 'relative',
    margin: 0,
    padding: 0,
    flex: 1,
  },
  options: {
    minZoom: 3, 
    maxZoom: 20,
  },
};

export default Map;