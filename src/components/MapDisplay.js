import React, { Component } from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';

const MAPI_KEY = "AIzaSyB7XNQZZPAKzsm7CkomnZA5jHGB4sHfeB4";

export class MapDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: 34.269447,
        lng: -118.781479
      },
      map: null,
      markers: [],
      markersProps: [],
      activeMarker: null,
      activeMarkerProps: null,
      infoWindowOpen: false
      }
    }

  componentDidMount = () => {

  }

  mapReady = (props, map) => {
    this.setState({map});
    this.updateMarkers(this.props.restaurants);
  }

  updateMarkers = (restaurants) => {
    if(!restaurants)
      return;
    /* If markers exist on map, clear them */
    for(let marker of this.state.markers) {
      return marker.setMap(null);
    }
    let markersProps = [];
    let newMarkers = restaurants.map((restaurant, index) => {
      let mProps = {
        index,
        key: index,
        name: restaurant.name,
        position: restaurant.pos,
        // street: restaurant.street,
        // city: restaurant.city,
        // state: restaurant.state
      };
      console.log(mProps);
      markersProps.push(mProps);
      console.log(markersProps);
      let animate = this.state.fisrtDrop ? this.props.google.maps.Animation.DROP : null;
      let marker = new this.props.google.maps.Marker({position: restaurant.pos, map: this.state.map, animate})
      marker.addListener('click', () => {
        this.onMarkerClick(mProps, marker, null);
      });
      return marker;
    })
    this.setState({newMarkers, markersProps});
  }

  render = () => {
  	const style = {
  		width: '100vw',
  		height: '100wh'
  	}

  	const center = {
  		lat: this.props.center.lat,
  		lng: this.props.center.lng
  	}

  	return (
  	  <Map
  	    aria-label="map"
  	    role="application"
  	    google={this.props.google}
  	    zoom={this.props.zoom}
  	    center={center}
  	    style={style}
        onReady={this.mapReady}
        >


  	  </Map>
  	  );
  }
}
 
export default GoogleApiWrapper({apiKey: MAPI_KEY})(MapDisplay)