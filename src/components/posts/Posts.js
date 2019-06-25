import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers, fetchPosts } from '../../actions/index';

class Posts extends Component {
  async componentDidMount() {
    if (!this.props.users.length) {
      await this.props.fetchUsers();
    }
    this.props.fetchPosts(this.props.match.params.id);
  }
  render() {
    return <div>{this.props.match.params.id}</div>;
  }
}
function mapStateToProps(state) {
  return {
    users: state.user.users,
    posts: state.post.posts,
  };
}
export default connect(
  mapStateToProps,
  { fetchUsers, fetchPosts },
)(Posts);
