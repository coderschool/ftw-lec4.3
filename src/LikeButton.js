import React, { Component } from 'react'

export default class LikeButton extends Component {
  render() {
    if(this.props.liked == true) {
      return <img onClick={() => this.props.onUnlike()} src="like-filled.png" height={this.props.size} width={this.props.size}/>
    } else {
      return <img onClick={() => this.props.onLike()} src="like-outline.png" height={this.props.size} width={this.props.size}/>
    }
    
  }
}
