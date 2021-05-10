import React from 'react';
import {
  Wrapper,
  IncomeChart,
  ChartWrapper,
  Title,
} from './Analytics.elements';

import incomechartsvglight from '../../assets/income_chart_light.svg';
import incomechartsvgdark from '../../assets/income_chart_dark.svg';

import expensechartlight from '../../assets/expense_chart_light.svg';
import expensechartdark from '../../assets/expense_chart_dark.svg';

import { connect } from 'react-redux';
import useTransactions from '../../useTransactions';
import NoData from '../NoData/NoData';
import { AddIcon, Information, SVG } from '../NoData/NoData.elements';

function Analytics(props) {
  const { transactions, app_theme } = props;

  const { chartIncomeData, chartExpenseData } = useTransactions(transactions);

  const chartExpenseLength = chartExpenseData.datasets[0].data.length;
  const chartIncomeLength = chartIncomeData.datasets[0].data.length;

  return (
    <>
      <Wrapper>
        <Title>My Income</Title>
        <ChartWrapper>
          {!chartIncomeLength ? (
            <NoData>
              {app_theme === 'light' ? (
                <SVG src={incomechartsvglight} alt="..." />
              ) : (
                <SVG src={incomechartsvgdark} />
              )}

              <Information>
                Analyze all your incomes by making a transaction.
              </Information>
            </NoData>
          ) : (
            <IncomeChart responsive data={chartIncomeData} />
          )}
        </ChartWrapper>

        <Title>My Expenses</Title>
        <ChartWrapper>
          {!chartExpenseLength ? (
            <NoData>
              {app_theme === 'light' ? (
                <SVG src={expensechartlight} alt="..." />
              ) : (
                <SVG src={expensechartdark} alt="..." />
              )}

              <Information>Add Expenses to analyze your spendings.</Information>
            </NoData>
          ) : (
            <IncomeChart responsive data={chartExpenseData} />
          )}
        </ChartWrapper>
      </Wrapper>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    transactions: state.expense.transactions,
    app_theme: state.appTheme.theme,
  };
};

export default connect(mapStateToProps)(Analytics);
