import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InstagramPost from './InstagramPost';

class App extends Component {
  render() {
    return (
      <div className="Instagram">
        <h1> Instagram App </h1>
        <InstagramPost />
      </div>
    );
  }
}

export default App;
