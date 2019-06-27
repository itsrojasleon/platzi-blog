import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import User from './user/User';
import Post from './post/Post';
import Task from './todo/Todo';
import TodoSave from './todo/TodoSave';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={User} />
        <Route path='/tasks' component={Task} />
        <Route path='/posts/:id' component={Post} />
        <Route path='/todos/save' component={TodoSave} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
