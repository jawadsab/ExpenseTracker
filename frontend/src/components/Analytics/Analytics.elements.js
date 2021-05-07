import styled from "styled-components"

import {Doughnut} from "react-chartjs-2";


export const Wrapper = styled.main`
    background:${({theme}) => theme.bgPrimary};
    min-height:90vh;


   
`;

export const Title = styled.h1`
    text-align:center;
    padding-top:1rem;
    color:${({theme}) => theme.textSecondary}
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

