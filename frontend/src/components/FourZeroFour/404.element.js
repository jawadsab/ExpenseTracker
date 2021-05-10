import styled from "styled-components"


export const Wrapper = styled.div`
    min-height:100vh;
    background-color:${({theme}) => theme.bgPrimary};
    color:${({theme}) => theme.textSecondary};
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`;

export const SVG = styled.img`
    width:300px;
    margin-bottom:2rem;
`;

export const Info = styled.p`
    font-size:1.6rem;
`;