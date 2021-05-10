import styled, { createGlobalStyle } from 'styled-components';
import {Link} from "react-router-dom";


const GlobalStyle = createGlobalStyle`
    * {
        padding:0;
        margin:0;
        box-sizing:border-box;
    }
    body {
        font-family: 'Epilogue', sans-serif;
    }
    canvas {
        width:1000px !important;
    }
`;

export const LinkTag = styled(Link)`
    text-decoration:none;
    color:#fff;
`;

export const Button = styled.button`
    border:none;
    outline:none;
    border-radius:10px;
    cursor: pointer;
`;

export const PageWrapper = styled.div`
    width:100vw;
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
`;
export const ErrorMessage = styled.div`
    width:100%;
    padding:8px;
    font-size:12px;
    border:2px solid #8f2d56;
    border-radius:10px;
    background-color:#ffd6ff;
    display:flex;
    justify-content:space-between;
    align-items:center;
`;

export const SuccessMessage = styled.div`
    width:100%;
    padding:8px;
    font-size:12px;
    border:2px solid ;
    border-radius:10px;
    border:2px solid #1b4332;
    background-color:#95d5b2;
    margin-top:8px;

`;

export default GlobalStyle;
