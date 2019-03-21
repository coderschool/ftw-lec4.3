import React, { Component } from 'react'

export default class PostMedia extends Component {
  render() {
    return (
      <div>
        <img src={this.props.image_url} height={400} width={400}/>
      </div>
    )
  }
}
