import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import ResetComponent from './ResetComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Redux Example </h1>
        <Counter />
        <ResetComponent />
      </div>
    );
  }
}

export default App;
