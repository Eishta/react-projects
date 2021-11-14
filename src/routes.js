import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import routes from './data/routesData';
import Home from './container/Home';

const createRoutes = () => (
  <Router>
    <Route path='/' exact component={Home}/>
    {routes.map(({ path, Component , exact}) => (
      <Route
        exact={exact}
        path={path}
        component={Component} />
    ))}
  </Router>
);

export default createRoutes;