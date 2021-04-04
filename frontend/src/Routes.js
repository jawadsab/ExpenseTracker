import React from 'react';
import GlobalStyle from "./globalStyles";
import { Home,Signup } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Routes = () => {
  return (
    <Router>
        <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </Router>
  );
};

export default Routes
