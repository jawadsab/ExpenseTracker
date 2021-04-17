import React,{useState} from 'react';
import { IconContext } from 'react-icons';
import { HiCurrencyDollar } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import { NavbarWrapper, NavLogo,NavLogoText,HamburgerWrapper,NavMenu,NavItem,NavButton } from './Navbar.elements.js';
import {Link} from "react-router-dom";
import {LinkTag} from "../../globalStyles";

const Navbar = () => {
    const [openNav,setOpenNav] = useState(false);
  return (
    <IconContext.Provider value={{color:"white"}}>
      <NavbarWrapper>
        <NavLogo to="/">
        <HiCurrencyDollar />
        <NavLogoText>Expense Tracker</NavLogoText>
        </NavLogo>
        <NavMenu active={openNav}>
            <NavItem>
                <NavButton as={Link} to="/signup" signin>SIGN UP</NavButton>
            </NavItem>
            <NavItem>
                <NavButton as={Link} to="/signin">SIGN IN</NavButton>
            </NavItem>
        </NavMenu>
        <HamburgerWrapper onClick={() => setOpenNav(!openNav)}>
            <FaBars />
        </HamburgerWrapper>
      </NavbarWrapper>
    </IconContext.Provider>
  );
};

export default Navbar;
