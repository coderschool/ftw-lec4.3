import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherCard from './WeatherCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Weather App </h1>
        <WeatherCard location="Ho Chi Minh City" temp={0.17}/>
      </div>
    );
  }
}

export default App;
