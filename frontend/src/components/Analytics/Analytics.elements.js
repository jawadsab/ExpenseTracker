import styled from "styled-components"

import {Doughnut} from "react-chartjs-2";


export const Wrapper = styled.main`

    width:80vw;
    margin-left:20vw;
    background:#FBFBFF;
    min-height:90vh;


    @media only screen and (max-width:720px) {
        margin-left:0;
        width:100vw;
    }
`;

export const Title = styled.h1`
    text-align:center;
    margin-top:1rem;
`;

export const ChartWrapper = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    margin-top:1rem;
  
`;


export const IncomeChart = styled(Doughnut)`

   /* width:50% !important;
   height:50% !important; */
   
  

`;

