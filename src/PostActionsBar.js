import React, { Component } from 'react'
import LikeButton from './LikeButton';

export default class PostActionsBar extends Component {
  constructor() {
    super();

    this.state = {
      liked: false
    }
  }
  handleLike() {
    this.setState({
      liked: true
    });
  }
  handleUnlike() {
    this.setState({
      liked: false
    });
  }

  render() {
    return (
      <div style={{display: 'flex'}}>
        <LikeButton size={32} liked={this.state.liked} onLike={() => this.handleLike()} onUnlike={ () => this.handleUnlike() }/>
        <p>{ this.state.liked ? 'Liked' : 'Not Liked'}</p>
        <span> <a href='#'> Share </a> </span>
        
      </div>
    )
  }
}
