import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import User from './user/User';
import Post from './post/Post';

function Task() {
  return <div>Tasks</div>;
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={User} />
        <Route path='/tasks' component={Task} />
        <Route path='/posts/:id' component={Post} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
