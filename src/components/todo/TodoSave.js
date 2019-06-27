import React, { Component } from 'react';

class TodoSave extends Component {
  render() {
    return (
      <div>
        <h1>Save Todo</h1>
        <div>
          User ID:
          <input type='number' />
          title:
          <input type='text' />
          <button>Save</button>
        </div>
      </div>
    );
  }
}
export default TodoSave;
