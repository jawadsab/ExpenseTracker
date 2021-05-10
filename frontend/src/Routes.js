import React, { useEffect } from 'react';
import GlobalStyle from './globalStyles';
import { lightTheme, darkTheme } from './Theme';
import { Home, Dashboard, Signup, Signin } from './pages';
import PrivateRoute from './components/Private/PrivateRoute';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { connect } from 'react-redux';
import store from './redux/store';
import setAuthToken from './_helper/setAuthToken';

import { loadUser } from './redux/actions/authAction';

import { ThemeProvider } from 'styled-components';
import { FourZeroFour } from './components';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const Routes = ({ app_theme }) => {
  useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
  }, []);

  return (
    <Router>
      <ThemeProvider theme={app_theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signin" component={Signin} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <Route component={FourZeroFour} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
};

const mapStateToProps = (state) => {
  return {
    app_theme: state.appTheme.theme,
  };
};

export default connect(mapStateToProps)(Routes);
