import React, { Component } from 'react'
import Movie from './Movie';

export default class MoviesList extends Component {
  render() {
    if(this.props.movies.length > 0) {
      return (
        <div>
          {this.props.movies.map(movie => 
            <Movie {...movie} />)}
        </div>
      )  
    } else {
      return <h1> No Movies! </h1>
    }
  }
}
