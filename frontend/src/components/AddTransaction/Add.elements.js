import styled from "styled-components";

export const Wrapper = styled.div`
    position:fixed;
    bottom:10px;
    right:10px;
`;

export const FloatingButton = styled.div`
    background-color:${({theme}) => theme.btnLogout};
    width:50px;
    height:50px;
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    color:#fff;

`;

export const Icon = styled.i`
   
`;

export const AddIcon = styled(Icon).attrs(props => ({
    className:"fas fa-2x fa-plus"
}))``;