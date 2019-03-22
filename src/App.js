import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import MoviesList from './MoviesList';

// TODO: REPLACE WITH REAL DATA
import SAMPLE_DATA from './sample_data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      moviesList: []
    }
  }

  async componentDidMount() {
    let apiKey = '69af71dc4080c45a2874a8e8b7220651';
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`
    let results = await fetch(url);
    let data = await results.json();
    this.setState({
      moviesList: data.results
    });
  }

  render() {
    return (
      <div className="App">
        <NavBar/>
        <MoviesList movies={this.state.moviesList} />
      </div>
    );
  }
}

export default App;
