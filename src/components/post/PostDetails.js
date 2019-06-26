import React, { Component } from 'react';
import Comment from '../comment/Comment';

class PostDetails extends Component {
  state = {
    open: false,
  };
  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  };
  render() {
    return (
      <div onClick={this.toggleOpen} className='post'>
        <div className='title'>{this.props.title}</div>
        <div className='body'>{this.props.body}</div>
        {this.state.open && <Comment id={this.props.id} />}
      </div>
    );
  }
}
export default PostDetails;
