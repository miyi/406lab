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
			userCoords: '',
    };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
		// getLocationPromise
		// 	.then(function(userCoords) {
		// 		const geolocation = {
		// 			center: userCoords,
		// 			zoom: 15,
		// 			bounds: '',
		// 		};
		// 		this.setState({
		// 			mapProps: geolocation,
		// 			userCoords: userCoords,
		// 		})
		// 	}).catch((err) => {
		// 		console.log(err);
		// 	});
		if (navigator && navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((pos) => {
				this.setState({
					mapProps: {
						center: {lat: pos.coords.latitude, lng: pos.coords.longitude},
						zoom: 16,
						bounds: '',
					},
					userCoords: {lat: pos.coords.latitude, lng: pos.coords.longitude},
				});
			});
		} else {
			const errorMessage = 'please enable geolocation in browser';
			console.log(errorMessage);
		}
  }
  onChange({center, zoom, bounds}) {
    this.setState({
      mapProps: {
        center: center,
        zoom: zoom,
        bounds: bounds,
      },
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
