import styled from "styled-components"
import {Link} from "react-router-dom"
import {Button} from "../../globalStyles"

export const TopDiv = styled.div`

    width:100%;
    height:10vh;
    padding:1rem;
    background-color:#48bfe3;
    display:flex;
    justify-content:space-between;
    align-items:center;
    position:sticky;
    top:0;
    display:flex;
    justify-content:space-between;

`;

export const Icon = styled.i`
    cursor:pointer
`;

export const HamIcon = styled(Icon).attrs(props => ({
    className:"fas fa-2x fa-bars"
}))``;

const handleNav = (active) => {
    if(active) {
        return "translateX(0%)";
    } else {
        return "translateX(-100%)";
    }
}

export const UserDiv = styled.div``;

export const UserGreeting = styled.p`
    font-weight:bold;
    font-size:1.7rem;
    color:#1A281F;

`;

export const ToggleNavbar = styled.nav`

    width:20vw;
    height:100vh;
    position:fixed;
    top:0;
    bottom:0;
    background-color:#4ea8de;
    border-right:1px solid #7400b8;
    transition: transform 0.3s ease-in;
    padding:2rem;

    @media only screen and (max-width:720px) {
        width:40vw;
        transform:${({active}) => handleNav(active)};
    }

`;


export const HomeLogo = styled(Link)`
    width:100%;
    background:red;
    display:block

`;

export const NavMenuWrapper = styled.div`

    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;

`;

export const NavMenu = styled.ul`
    width:100%;
    margin-top:1rem;
    list-style-type:none;

`;

export const NavItem = styled.li`
    width:100%;
    padding:0.5rem;
    margin-top:1rem;
    cursor:pointer;
    display:block;
    text-decoration:none;
    color:#fff;
    font-weight:bold;
    border-radius:5px;
    transition:background 0.2s ease;

    &:hover {
        background:#48bfe3;
    }
`;

export const HomeIcon = styled(Icon).attrs(props =>({
    className:"fas fa-home"
}))`
    font-size:24px;
`;

export const NavItemText = styled.span`
    margin-left:8px;
`;

export const LogoutWrapper = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:8px;
`;

export const Logout = styled(Button)`
    border-radius:5px;
    width:100%;
    padding: 4px 0px;
`;