import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import restaurants from './data/restaurants.json';
import MapDisplay from './components/MapDisplay'
// import SquareApi from './api/'

class App extends Component {
    constructor(props) {
    super(props);
    this.state = {
      // places: [],
      // markers: [],
      // center: [],
      allRestaurants: restaurants,
      center: {
        lat: 34.269447,
        lng: -118.781479
      },
      zoom: 11
      }
    }

  // componentDidMount() {
  //   SquareApi.search({
  //     near: "Simi Valley,CA",
  //     query: "thai cottage",
  //     limit: 10
  //   })
  //   .then(results => {
  //     // const {places} = results.response;
  //     // const {center} = results.response.geocode.feature.geometry;
  //     console.log(results);
  //     // this.setState({places, markers, center});
  //   });
  // }

  render = () => {
    return (
      <div className="App">
        {/* 
        <header className="App-header">
        </header>
        */}
        <h1>Thai Food in Simi Valley, CA</h1>
        <MapDisplay
          zoom={this.state.zoom}
          center={this.state.center}
          allRestauants={this.state.allRestaurants}
         />
      </div>
    );
  }
}

export default App;
