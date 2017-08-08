import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { onGeoSuccess, onGeofail, geoOptions } from './GmapHelper'
import mapConfig from './GmapConfig'

//simple hover test marker import
import SimpleHover from './marker/SimpleHover';
import { K_SIZE } from './marker/SimpleHoverStyle';

//import markerdata
import markerData from './marker/markerdata'


const UBC_POS = { lat: 49.2606052, lng: -123.2459938 };

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapProps: {
        center: UBC_POS,
        zoom: 15,
        bounds: '',
			},
			userCoords: '',
			markers: markerData,
		};
		console.log(this.state.markers)
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
		if (navigator && navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
        (pos) => {
          const newCenter = { lat: pos.coords.latitude, lng: pos.coords.longitude };
          const newMapProps = {
            center: newCenter,
            zoom: 16,
            bounds: '',
          }
          this.setState({
            mapProps: newMapProps,
            userCoords: newCenter,
          })
        }, onGeofail, geoOptions);
		} else {
			const errorMessage = 'please enable geolocation in browser';
			console.log(errorMessage);
		}
  }
  onChange({center, zoom, bounds}) {
    let newMapProps = {
      center: center,
      zoom: zoom,
      bounds: bounds,
    }
    this.setState({
      mapProps: newMapProps,
		});
  }

  render() {
    const center = this.state.mapProps.center;
		const zoom = this.state.mapProps.zoom;
		const markers = this.state.markers
    return (
      <GoogleMapReact
        bootstrapURLKeys={{
          key: 'AIzaSyD86-ToDtzkbbljieRyCwmXEXdMteVw7Bs',
          language: 'en',
        }}
        center={center}
        zoom={zoom}
        style={this.props.style}
        options={this.props.options}
        onChange={this.onChange}
        hoverDistance={K_SIZE/2}
      >
        { markers.map(({id, ...markerProps}) => <SimpleHover {...markerProps} key={id} />

        )}
      </GoogleMapReact>
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