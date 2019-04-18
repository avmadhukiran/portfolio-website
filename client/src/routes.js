import React from 'react';
import { Route } from 'react-router';
import Home from './components/views/home.js';
import App from './components/app.js';

import repos from './components/views/repos.js';

export default (
  <Route path='/' component={App}>
    <Route exact path="/" component={Home}/>
    <Route path='repos' component={repos} />
    <Route path='*' component={Home} />
  </Route>
);