import React, { useEffect } from 'react';
import GlobalStyle from './globalStyles';
import { Home, Dashboard, Signup, Signin } from './pages';
import PrivateRoute from './components/Private/PrivateRoute';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './redux/store';
import setAuthToken from './_helper/setAuthToken';

import { loadUser } from './redux/actions/authAction';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const Routes = () => {
  useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signin" component={Signin} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default Routes;
