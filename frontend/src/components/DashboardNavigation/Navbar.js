import React, { useState } from 'react';
import {
  TopDiv,
  HamIcon,
  UserDiv,
  UserGreeting,
  ToggleNavbar,
  HomeLogo,
  NavMenuWrapper,
  NavMenu,
  NavItem,
  HomeIcon,
  NavItemText,
  LogoutWrapper,
  Logout,
} from './DashNav.elements';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Navbar(props) {
  const [navOpen, setNavOpen] = useState(false);
  console.log('USERRR ', props.user, props.loading);

  const { loading, user } = props;
  return (
    <>
      <TopDiv>
        <HamIcon onClick={() => setNavOpen(!navOpen)} />
        {!loading && (
          <UserDiv>
            <UserGreeting>{`Hello, ${user.username.charAt(0).toUpperCase() + user.username.slice(1)} !`}</UserGreeting>
          </UserDiv>
        )}
      </TopDiv>
      <ToggleNavbar onClick={() => setNavOpen(!navOpen)} active={navOpen}>
        <HomeLogo to="/dashboard">Logo</HomeLogo>
        <NavMenuWrapper>
          <NavMenu>
            <NavItem as={Link} to="/dashboard">
              <HomeIcon />
              <NavItemText>Home</NavItemText>
            </NavItem>
          </NavMenu>
          <LogoutWrapper>
            <Logout>Logout</Logout>
          </LogoutWrapper>
        </NavMenuWrapper>
      </ToggleNavbar>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    loading: state.auth.loading,
  };
};

export default connect(mapStateToProps)(Navbar);
