import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTodos } from '../../actions';
import Spinner from '../Spinner';
import Fatal from '../Fatal';

class Todo extends Component {
  componentDidMount() {
    if (!this.props.todos.length) {
      this.props.fetchTodos();
    }
  }
  renderTodos() {
    if (this.props.loading) {
      return <Spinner />;
    }
    if (this.props.error) {
      return <Fatal msg={this.props.error} />;
    }
    const user = Object.keys(this.props.todos).map(user => (
      <div key={user}>
        <h2>{user}</h2>
        <span>{this.renderTodo(user)}</span>
      </div>
    ));
    return <div>{user}</div>;
  }
  renderTodo(userId) {
    const todos = {
      ...this.props.todos[userId],
    };
    return Object.keys(todos).map(todo => (
      <div key={todo}>
        <input type='checkbox' defaultChecked={todos[todo].completed} />
        <span>{todos[todo].title}</span>
      </div>
    ));
  }
  render() {
    return (
      <div>
        <button>
          <Link to='/todos/save'>Save</Link>
        </button>
        {this.renderTodos()}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    todos: state.todo.todos,
    loading: state.todo.loading,
    error: state.todo.error,
  };
}
export default connect(
  mapStateToProps,
  { fetchTodos },
)(Todo);
