import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUserId, updateTitle } from '../../actions/index';

class TodoSave extends Component {
  changeUserId = e => {
    this.props.updateUserId(e.target.value);
  };
  changeTitle = e => {
    this.props.updateTitle(e.target.value);
  };
  render() {
    return (
      <div>
        <h1>Save Todo</h1>
        <div>
          User ID:
          <input
            type='number'
            value={this.props.userId}
            onChange={this.changeUserId}
          />
          <br />
          title:
          <input
            type='text'
            value={this.props.title}
            onChange={this.changeTitle}
          />
          <br />
          <button>Save</button>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    userId: state.todo.userId,
    title: state.todo.title,
  };
}
export default connect(
  mapStateToProps,
  { updateUserId, updateTitle },
)(TodoSave);
