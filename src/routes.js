import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

let routes = [{ path: '', component: '' }]

const createRoutes = () => (
    <Router>
        {/* <Route exact path='/' component={Home}/> */}
        {routes.map(route => <Route exact path={route.path} component={route.component} />)}
        {/* <Route exact path="/sessionstate1" component={Template1}/>
      <Route exact path="/sessionstate2" component={Template2}/>
      <Route exact path="/sessionstate3" component={Template3}/> */}
    </Router>
);

export default createRoutes;