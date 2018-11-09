import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import MapDisplay from './components/MapDisplay'

class App extends Component {
  state = {
    lat: 34.269447,
    lon: -118.781479,
    zoom: 14,
  }
  render = () => {
    return (
      <div className="App">
        {/* 
        <header className="App-header">
        </header>
        */}
        
        <MapDisplay
          lat={this.state.lat}
          lon={this.state.lon}
          zoom={this.state.zoom}
         />
      </div>
    );
  }
}

export default App;
