import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../../actions/index';

class Comment extends Component {
  componentDidMount() {
    this.props.fetchComments(this.props.id);
  }
  render() {
    console.log(this.props.comments);
    return <div>Comments</div>;
  }
}
function mapStateToProps(state) {
  return {
    comments: state.comment.comments,
  };
}
export default connect(
  mapStateToProps,
  { fetchComments },
)(Comment);
