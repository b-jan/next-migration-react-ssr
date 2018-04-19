import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';

const Routes = () => (
  <div >
    <Route exact path="/" render={(props) => <Home {...props} repo="zeit/next.js"/>} />
    <Route exact path="/about" component={About} />
  </div >
);

export default Routes;
