import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Users from './users/Users';
import Posts from './posts/Posts';

function Tasks() {
  return <div>Tasks</div>;
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Users} />
        <Route path='/tasks' component={Tasks} />
        <Route path='/posts/:id' component={Posts} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
