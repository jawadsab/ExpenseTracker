import React, { useState } from 'react';
import {
  NavBar,
  HamIcon,
  NavMenu,
  CloseIcon,
  NavItems,
  NavToggle,
  NavItem,
  SpendingIcon,
  NavTitle,
  NavLink,
} from './Nav.elements';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

function Navbar() {
  const [navMenuActive, setNavMenuActive] = useState(false);
  return (
    <>
      <NavBar>
        <HamIcon onClick={() => setNavMenuActive(!navMenuActive)} />
      </NavBar>
      <NavMenu active={navMenuActive}>
        <NavItems onClick={() => setNavMenuActive(!navMenuActive)}>
          <NavToggle>
            <CloseIcon />
          </NavToggle>
          <NavItem>
            <NavLink to="/spending">
              <SpendingIcon />
              <NavTitle>Spending</NavTitle>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/transactions">
              <SpendingIcon />
              <NavTitle>Transactions</NavTitle>
            </NavLink>
          </NavItem>
         
        </NavItems>
      </NavMenu>
    </>
  );
}

export default Navbar;
