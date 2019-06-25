import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers, fetchPosts } from '../../actions/index';
import Spinner from '../Spinner';
import Fatal from '../Fatal';

class Posts extends Component {
  async componentDidMount() {
    if (!this.props.users.length) {
      await this.props.fetchUsers();
    }
    this.props.fetchPosts(this.props.match.params.id);
  }

  renderUser = () => {
    if (!this.props.users.length || this.props.loading) {
      return <Spinner />;
    }
    if (this.props.error) {
      return <Fatal msg={this.props.error} />;
    }
    return <div>{this.props.users[this.props.match.params.id].name}</div>;
  };

  render() {
    return <div>{this.renderUser()}</div>;
  }
}
function mapStateToProps(state) {
  return {
    users: state.user.users,
    posts: state.post.posts,
    loading: state.user.loading,
    error: state.user.error,
  };
}
export default connect(
  mapStateToProps,
  { fetchUsers, fetchPosts },
)(Posts);
