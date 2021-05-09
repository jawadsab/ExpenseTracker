import styled from 'styled-components';

import { Doughnut } from 'react-chartjs-2';

export const Wrapper = styled.main`
  background-color: ${({ theme }) => theme.bgPrimary};
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%239C92AC' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  min-height: 100vh;
`;

export const Title = styled.h1`
  text-align: center;
  padding-top: 1rem;
  color: ${({ theme }) => theme.textSecondary};
`;

export const ChartWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

export const IncomeChart = styled(Doughnut)`
  /* width:50% !important;
   height:50% !important; */
`;
