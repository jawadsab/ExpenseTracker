import styled from 'styled-components';
import { LinkTag, Button } from '../../globalStyles';

export const NavbarWrapper = styled.nav`
  width: 100%;
  height: 15vh;
  background-color: #03045e;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const NavLogo = styled(LinkTag)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavLogoText = styled.span`
  margin-left: 8px;
`;

export const HamburgerWrapper = styled.div`
  cursor: pointer;
  display: none;
  @media only screen and (max-width: 720px) {
    display: block;
  }
`;

const handleNav = (active) => {
    if(active) {
        return "translateY(0%)";
    } else {
        return "translateY(-100%)";
    }
}

export const NavMenu = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 60%;
  height: 100%;
  background-color: #03045e;
  transition: transform 0.3s ease-in;

  /* background: pink; */

 

  @media only screen and (max-width: 720px) {
    position: absolute;
    width: 100%;
    left: 0;
    top: 15vh;
    z-index:-10;
    transform:${({active}) => handleNav(active)};
    flex-direction:column;
    justify-content:flex-start;
    height:auto;
  }
`;

export const NavItem = styled.li`
  margin: 0 1rem;
  /* background:red; */
  @media only screen and (max-width: 720px) {
    width:100%;
    display:flex;
    justify-content:center;
    padding:0.5rem;
   
  }
`;

export const NavButton = styled(Button)`
  padding: 8px 16px;
  border-radius:1rem;
  color:#023047;
  text-decoration:none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:${(props) => props.signin ? "#ffb703":"#219ebc"};
  @media only screen and (max-width: 720px) {
    width:70%;
    
   
  }
`;
