import React, { Component } from 'react'
import Map, {GoogleApiWrapper} from 'google-maps-react'
import s from './Container.css'
import {searchNearby} from './GapiHelper'


// const Initcenter = Geolocation.getCurrentPosition();
// navigator.geolocation.getCurrentPosition(showPosition)

export class Container extends Component {
  constructor(props) {
		super(props)
		this.onReady = this.onReady.bind(this)
		this.state = {
      places: [],
      pagination: null
    }
  }

	onReady(mapProps, map) {
		const {google} = this.props
		const opts = {
			location: map.center,
			radius: '500',
			types: ['cafe'],
		}
  	searchNearby(google, map, opts)
    .then((results, pagination) => {
    	setState({
				places: results,
        pagination
    	}) 
    }).catch((status) => {
      console.log('searchNearby error')
      console.log(status)
        // There was an error
    })
	}

    render() {
    return (
      <div>
        Hello from the container
        <Map
          google={this.props.google}
          onReady={this.onReady}>

        </Map>
      </div>
    )
  }
}



export default GoogleApiWrapper({
  apiKey: process.env.GAPI_KEY,
})(Container)