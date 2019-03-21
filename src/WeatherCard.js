import React, { Component } from 'react'
import WeatherImage from './WeatherImage';
import { Card } from 'reactstrap';

export default class WeatherCard extends Component {

  constructor() {
    super();
    this.state = {
      unit: 'F',
      otherThing: 1
    }
  }

  formatTemp() {
    // temperature is in this.props.temp
    if(this.state.unit == 'C') {
      return `${(this.props.temp - 273).toFixed(2)} deg C`;   
    } else {
      return `${(this.props.temp + 32 * 9/5).toFixed(2)} deg F`;  
    }
    
  }
  changeTemp() {
    console.log(this);
    if(this.state.unit == 'C') {
      this.setState({
        unit: 'F'
      });
    } else {
      this.setState({
        unit: 'C'
      })
    }
  }

  render() {
    return (
      <Card >
        <WeatherImage temp={this.props.temp}/>
        <div className="card-body">
          <h5 className="card-title">{this.props.location}</h5>
          <p className="card-text">{this.formatTemp()}</p>
          <a href="#" onClick={() => this.changeTemp()} className="btn btn-primary">Show { this.state.unit == 'C' ? 'Fahrenheit' : 'Celsius' }</a>
        </div>
      </Card>
    )
  }
}

