import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

const TEST_DATA = [
  {id: 1, name: "charles", skill: 3, experience: 13},
  {id: 2, name: "tuan", skill: 7, experience: 2},
  {id: 10, name: "bill gates", skill: 8, experience: 30}
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World </h1>
        { TEST_DATA.map( c => <li><Link to={`/candidates/${c.id}`}> {c.name} </Link></li>)}
      </div>
    );
  }
}

export default App;
