import React, { Component } from 'react'
import Comment from './Comment';

export default class CommentsList extends Component {
  render() {
    return (
      <div>
        <Comment username="Charles" text="Wow"/>
        <Comment username="Tuan" text="This Sucks" />
        <Comment username="Erik" text="I took this photo"/>
        <input type="text" placeholder="Enter Comment"/>
      </div>
    )
  }
}
