import React, { Component } from 'react'
import LikeButton from './LikeButton';

export default class Comment extends Component {
  render() {
    return (
      <div style={{display: 'flex'}}>
        <p style={{marginRight: '15px'}}>{this.props.username} </p>
        <p>{this.props.text}</p>
        <LikeButton size={16}  />
      </div>
    )
  }
}
