import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUserId, updateTitle, postTodo } from '../../actions/index';

class TodoSave extends Component {
  changeUserId = e => {
    this.props.updateUserId(e.target.value);
  };
  changeTitle = e => {
    this.props.updateTitle(e.target.value);
  };
  handleSave = () => {
    const newTodo = {
      userId: this.props.userId,
      title: this.props.title,
      completed: false,
    };
    this.props.postTodo(newTodo);
  };
  disable = () => {
    const { userId, title } = this.props;
    if (!userId || !title) {
      return true;
    }
    return false;
  };

  render() {
    const { userId, title } = this.props;
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
          <button
            onClick={this.handleSave}
            disabled={!userId || !title ? true : false}
          >
            Save
          </button>
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
  { updateUserId, updateTitle, postTodo },
)(TodoSave);
