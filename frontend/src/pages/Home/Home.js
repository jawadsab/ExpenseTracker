import React from 'react';
import { Navigation } from '../../components';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

function Home(props) {
  const { isAuthenticated } = props;
  return (
    <div>
      {isAuthenticated && <Redirect to="/dashboard" />}
      <Navigation />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps)(Home);
