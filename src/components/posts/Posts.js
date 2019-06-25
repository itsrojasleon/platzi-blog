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

  renderUser() {
    if (!this.props.users.length || this.props.loadingUsers) {
      return <Spinner />;
    }
    if (this.props.errorUsers) {
      return <Fatal msg={this.props.errorUsers} />;
    }
    return <h2>{this.props.users[this.props.match.params.id - 1].name}</h2>;
  }
  renderPosts() {
    if (!this.props.posts.length || this.props.loadingPosts) {
      return <Spinner />;
    }
    if (this.props.errorPosts) {
      return <Fatal msg={this.props.errorPosts} />;
    }
    return this.props.posts.map(post => <div key={post.id}>{post.title}</div>);
  }

  render() {
    console.log(this.props.match.params.id);
    return (
      <div className='margin'>
        {this.renderUser()}
        {this.renderPosts()}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    users: state.user.users,
    posts: state.post.posts,
    loadingUsers: state.user.loading,
    errorUsers: state.user.error,
    loadingPosts: state.user.loading,
    errorPosts: state.user.error,
  };
}
export default connect(
  mapStateToProps,
  { fetchUsers, fetchPosts },
)(Posts);
