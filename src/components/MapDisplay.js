import React, { Component } from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';

const MAPI_KEY = "AIzaSyB7XNQZZPAKzsm7CkomnZA5jHGB4sHfeB4";

export class MapDisplay extends React.Component {


  render = () => {
  	const style = {
  		width: '100%',
  		height: '100%'
  	}
  	// const center = {
  	// 	lat: this.props.lat,
  	// 	lng: this.props.lon
  	// }
  	return (
  	  <Map
  	    aria-label="map"
  	    role="application"
  	    google={this.props.google}
  	    zoom={this.props.zoom}
  	    center={this.props.center}
  	    style={style}
  	    places={this.props.places}
  	    markers={this.props.markers &&
  	    	     this.props.markers.filter(marker => marker.isVisible)
  	    	     .map((marker, index) => (
  	    	        key={index}, 
  	    	     	lat={marker.lat}, 
  	    	     	lng={marker.lng} ))
  	    	 } 
  	    >

  	  </Map>
  	  );
  }
}
 
export default GoogleApiWrapper({apiKey: MAPI_KEY})(MapDisplay)