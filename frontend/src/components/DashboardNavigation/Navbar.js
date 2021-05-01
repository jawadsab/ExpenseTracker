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
  ChartIcon,
  CheckBoxWrapper,
  CheckBoxLabel,
  CheckBox,
} from './DashNav.elements';

import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/authAction';
import { switchTheme } from '../../redux/actions/themeAction';

function Navbar(props) {
  const [navOpen, setNavOpen] = useState(false);
  

  const { loading, user, logout, app_theme, switchTheme } = props;

  const themeToggler = (e) => {
    app_theme === 'light' ? switchTheme('dark') : switchTheme('light');
  };
  return (
    <>
      <TopDiv>
        <HamIcon onClick={() => setNavOpen(!navOpen)} />
        {!loading && (
          <UserDiv>
            <UserGreeting>{`Hello, ${
              user.username.charAt(0).toUpperCase() + user.username.slice(1)
            } !`}</UserGreeting>
          </UserDiv>
        )}
      </TopDiv>
      <ToggleNavbar onClick={() => setNavOpen(!navOpen)} active={navOpen}>
        <HomeLogo to="/dashboard">Logo</HomeLogo>
        <NavMenuWrapper>
          <NavMenu>
            <NavItem
              as={NavLink}
              activeStyle={{ background: '#48bfe3' }}
              to="/dashboard"
            >
              <HomeIcon />
              <NavItemText>Home</NavItemText>
            </NavItem>
            <NavItem
              as={NavLink}
              activeStyle={{ background: '#48bfe3' }}
              to="/stats"
            >
              <ChartIcon />
              <NavItemText>Stats</NavItemText>
            </NavItem>
          </NavMenu>
          <div>
            <CheckBoxWrapper>
              <CheckBox onClick={themeToggler} type="checkbox" id="checkbox" />
              <CheckBoxLabel htmlFor="checkbox"></CheckBoxLabel>
            </CheckBoxWrapper>
            <LogoutWrapper>
              <Logout onClick={() => logout()}>Logout</Logout>
            </LogoutWrapper>
          </div>
        </NavMenuWrapper>
      </ToggleNavbar>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    loading: state.auth.loading,
    app_theme: state.appTheme.theme,
  };
};

export default connect(mapStateToProps, { logout, switchTheme })(Navbar);
