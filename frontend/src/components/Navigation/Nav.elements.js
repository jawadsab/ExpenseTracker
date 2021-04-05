import styled from 'styled-components';
import {Link} from "react-router-dom";
import { FaBars, FaTimes,FaMoneyBillAlt } from 'react-icons/fa';

export const NavBar = styled.div`
  padding: 1rem;
  background-color: #03045e;
  height: 80px;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const HamIcon = styled(FaBars)`
  font-size: 32px;
  color: #caf0f8;
  cursor: pointer;
`;
export const CloseIcon = styled(FaTimes)`
  font-size: 32px;
  color: #caf0f8;
  cursor:pointer;
`;

export const SpendingIcon = styled(FaMoneyBillAlt)`
    font-size:24px;
    color:#fff;
`;

const handleNavMenu = (active) => {
    if(active) {
        return "translateX(0%)";
    } else {
        return "translateX(-100%)";
    }
}

export const NavMenu = styled.nav`
  width: 250px;
  height: 100vh;
  background-color: #03045e;
  position:fixed;
  top:0;
  transform: ${({active}) => handleNavMenu(active)};
  transition:850ms;
  
`;

export const NavItems = styled.ul`
    list-style-type:none;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    position:relative;
`;

export const NavToggle = styled.li`
    position:absolute;
    top:10px;
    left:10px;
    padding:1rem;
`;

export const NavItem = styled.li`
width:100%;
display:flex;
justify-content:center;
align-items:center;
padding:12px;
`;

export const NavTitle = styled.span`
    margin-left:15px;
`;

export const NavLink = styled(Link)`
    display:flex;
    justify-content:center;
    align-items:center;
    text-decoration:none;
    color:#fff;
`;