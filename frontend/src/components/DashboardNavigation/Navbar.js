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
  Sun,
  Moon,
  Logo
} from './DashNav.elements';

import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/authAction';
import { switchTheme } from '../../redux/actions/themeAction';

function Navbar(props) {
  const [navOpen, setNavOpen] = useState(false);

  const [active, setActive] = useState(false);

  const { loading, user, logout, app_theme, switchTheme } = props;

  const themeToggler = (e) => {
    app_theme === 'light' ? switchTheme('dark') : switchTheme('light');
  };

  return (
    <>
     

      <TopDiv active={active}>
        <HamIcon onClick={() => setNavOpen(!navOpen)} />
        {
          app_theme === "light" ? <Sun onClick={themeToggler} /> : <Moon onClick={themeToggler} />
        }
       
      </TopDiv>
      <ToggleNavbar onClick={() => setNavOpen(!navOpen)} active={navOpen}>
    
        <HomeLogo to="/dashboard">
          <Logo>Expense Tracker</Logo>
        </HomeLogo>
        <NavMenuWrapper>
          <NavMenu>
            <NavItem
              as={NavLink}
              activeStyle={
                app_theme === 'light'
                  ? { background: '#FFF' }
                  : { background: '#0466C8' }
              }
              to="/dashboard"
            >
              <HomeIcon />
              <NavItemText>HOME</NavItemText>
            </NavItem>
            <NavItem
              as={NavLink}
              activeStyle={
                app_theme === 'light'
                  ? { background: '#FFF' }
                  : { background: '#0466C8' }
              }
              to="/stats"
            >
              <ChartIcon />
              <NavItemText>STATS</NavItemText>
            </NavItem>
          </NavMenu>

          <LogoutWrapper>
            <Logout onClick={() => logout()}>Logout</Logout>
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
    app_theme: state.appTheme.theme,
  };
};

export default connect(mapStateToProps, { logout, switchTheme })(Navbar);
