import React, { Component } from 'react'
import PostUserTitle from './PostUserTitle';
import PostMedia from './PostMedia';
import PostActionsBar from './PostActionsBar';
import CommentsList from './CommentsList';

export default class InstagramPost extends Component {
  render() {
    return (
      <div style={{border: '2px solid gray'}}>
        <PostUserTitle avatar_url="http://www.nretnil.com/avatar/barrel.jpg" username="Test User 1" />
        <PostMedia image_url="https://images.unsplash.com/photo-1552926140-9f0f220ff5ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80"/>
        <PostActionsBar />
        <CommentsList />
      </div>
    )
  }
}
