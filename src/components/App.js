import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Users from './users/Users';
import Publications from './publications/Publications';

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
        <Route path='/publications/:id' component={Publications} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
