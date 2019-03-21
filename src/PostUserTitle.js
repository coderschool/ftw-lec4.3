import React, { Component } from 'react'

export default class PostUserTitle extends Component {
  render() {
    return (
      <div>
        <img src={this.props.avatar_url} height={64} width={64}/>
        {this.props.username}
      </div>
    )
  }
}
