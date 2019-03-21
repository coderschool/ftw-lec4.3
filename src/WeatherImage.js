import React, { Component } from 'react'

export default class WeatherImage extends Component {
  getImageSrc() {
    if(this.props.temp > 30) {
      return "sun.jpg";
    } else {
      return "cloud.jpg";
    }
  }
  
  render() {
    return (
      <img src={this.getImageSrc()} width={100} height={100} style={{margin: 'auto'}}></img>
    )
  }
}
