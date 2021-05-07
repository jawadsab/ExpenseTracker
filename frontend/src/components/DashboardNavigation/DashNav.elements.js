import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '../../globalStyles';

export const TopDiv = styled.div`
  width: 100%;
  height: 50px;
  padding: 1rem;
  background: ${({ theme }) => theme.Primary};
  background: transparent;
  background: ${({ theme }) => theme.bgPrimary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
`;

export const Icon = styled.i`
  cursor: pointer;
`;

export const HamIcon = styled(Icon).attrs((props) => ({
  className: 'fas fa-2x fa-bars',
}))`
  color: ${({ theme }) => theme.textPrimary};
`;

export const Sun = styled(Icon).attrs((props) => ({
  className: 'fas fa-2x fa-sun',
}))`
  color: ${({ theme }) => theme.mode};
`;

export const Moon = styled(Icon).attrs((props) => ({
  className: 'fas fa-2x fa-moon',
}))`
  color: ${({ theme }) => theme.mode};
`;

const handleNav = (active) => {
  if (active) {
    return 'translateX(0%)';
  } else {
    return 'translateX(-100%)';
  }
};

export const UserDiv = styled.div``;

export const UserGreeting = styled.p`
  font-weight: bold;
  font-size: 1.7rem;
  @media only screen and (max-width: 420px) {
    font-size: 1.3rem;
  }
`;

export const ToggleNavbar = styled.nav`
  width: 20vw;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.bgSecondary};
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: transform 0.3s ease-in;
  padding: 1rem;
  transform: ${({ active }) => handleNav(active)};

  @media only screen and (max-width: 780px) {
    width: 40vw;
    transform: ${({ active }) => handleNav(active)};
    padding: 0rem;
  }
`;

export const HomeLogo = styled(Link)`
  width: 100%;
  background: red;
  display: block;
  @media only screen and (max-width: 780px) {
    padding: 1rem;
  }
`;

export const NavMenuWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const NavMenu = styled.ul`
  width: 100%;
  margin-top: 1rem;
  list-style-type: none;
`;

export const NavItem = styled.li`
  width: 100%;
  padding: 0.5rem;
  margin-top: 1rem;
  cursor: pointer;
  display: block;
  text-decoration: none;
  position: relative;

  color: ${({ theme }) => theme.textSecondary};

  font-weight: bold;
  border-radius: 5px;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 2px;
    background-color: ${({theme}) => theme.textSecondary};
    transition: width 0.6s cubic-bezier(0.25, 1, 0.5, 1);
  }
  &:hover:before {
    left: 0;
    right: auto;
    width: 100%;
  }
`;

export const HomeIcon = styled(Icon).attrs((props) => ({
  className: 'fas fa-home',
}))`
  font-size: 24px;

  @media only screen and (max-width: 420px) {
    font-size: 18px;
  }
`;

export const ChartIcon = styled(Icon).attrs((props) => ({
  className: 'fas fa-chart-pie',
}))`
  font-size: 24px;
  @media only screen and (max-width: 420px) {
    font-size: 18px;
  }
`;

export const NavItemText = styled.span`
  margin-left: 8px;
`;

export const LogoutWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  margin-top: 1rem;
`;

export const Logout = styled(Button)`
  border-radius: 5px;
  width: 100%;
  padding: 12px 0px;
  background-color: ${({ theme }) => theme.btnLogout};
  color: #fff;

  &:hover {
    filter: brightness(110%);
  }
`;

export const CheckBoxWrapper = styled.div`
  position: relative;
`;
export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: #4fbe79;
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

