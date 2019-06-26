import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../../actions/index';
import CommentDetails from './CommentDetails';
import Spinner from '../Spinner';
import Fatal from '../Fatal';

class Comment extends Component {
  componentDidMount() {
    this.props.fetchComments(this.props.id);
  }
  renderComments() {
    if (this.props.error) {
      return <Fatal msg={this.props.error} />;
    }
    if (this.props.loading) {
      return <Spinner />;
    }
    return (
      <ul>
        {this.props.comments.map(comment => (
          <CommentDetails key={comment.id} {...comment} />
        ))}
      </ul>
    );
  }
  render() {
    return <div>{this.renderComments()}</div>;
  }
}
function mapStateToProps(state) {
  return {
    comments: state.comment.comments,
    loading: state.comment.loading,
    error: state.comment.error,
  };
}
export default connect(
  mapStateToProps,
  { fetchComments },
)(Comment);
