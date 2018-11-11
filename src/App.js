import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import MapDisplay from './components/MapDisplay'
import SquareApi from './api/'

class App extends Component {
    constructor() {
    super();
    this.state = {
      places: [],
      markers: [],
      center: [],
      // lat: 34.269447,
      // lon: -118.781479,
      zoom: 14
    }
  }

  componentDidMount() {
    SquareApi.search({
      near: "Simi Valley,CA",
      query: "thai cottage",
      limit: 10
    })
    .then(results => {
      // const {places} = results.response;
      // const {center} = results.response.geocode.feature.geometry;
      console.log(results);
      // this.setState({places, markers, center});
    });
  }

  render = () => {
    return (
      <div className="App">
        {/* 
        <header className="App-header">
        </header>
        */}
        <h1>Simi Valley, CA Thrift Stores</h1>
        <MapDisplay
          {...this.state}
         />
      </div>
    );
  }
}

export default App;
