import React, { useEffect } from 'react';
import { Wrapper } from './DashboardHome.elements';
import { connect } from 'react-redux';
import {
  loadTransactionSummary,
  getTransactions,
} from '../../redux/actions/expenseActions';

import Cashflow from '../CashFlow/CashFlow';
import DisplayTransaction from '../DisplayTransactions/DisplayTransaction';
import setAuthToken from '../../_helper/setAuthToken';

import { Doughnut } from 'react-chartjs-2';
import useTransactions from '../../useTransactions';

function DashboardHome(props) {
  const { user, transactions, getTransactions } = props;
  const {
    incomeTotal,
    expenseTotal,
  } = useTransactions(transactions);

  const showWhenNotLoading = () => {
    console.log(transactions);
    return (
      <>
        <Cashflow
          availableBalance={incomeTotal - expenseTotal}
          spent={expenseTotal}
          income={incomeTotal}
        />
        <DisplayTransaction />
      </>
    );
  };

  useEffect(() => {
    if (user) {
      const userId = user._id;
      const token = localStorage.getItem('token');
      setAuthToken(token);
      getTransactions(userId);
    }
  }, [user, getTransactions]);

  return (
    <>
      <Wrapper>{showWhenNotLoading()}</Wrapper>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    userLoading: state.auth.loading,
    user: state.auth.user,
    token: state.auth.token,
    isAuthenticated: state.auth.isAuthenticated,
    summaryLoading: state.expense.loading,
    summary: state.expense.summary,
    balance: state.expense.avlBalance,
    spent: state.expense.expenseTotal,
    income: state.expense.incomeTotal,
    transactions: state.expense.transactions,
  };
};

export default connect(mapStateToProps, {
  loadTransactionSummary,
  getTransactions,
})(DashboardHome);
