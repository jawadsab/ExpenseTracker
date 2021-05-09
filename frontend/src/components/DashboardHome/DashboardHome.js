import React, { useEffect } from 'react';
import { Wrapper } from './DashboardHome.elements';
import { connect } from 'react-redux';
import { getTransactions } from '../../redux/actions/expenseActions';

import Cashflow from '../CashFlow/CashFlow';
import DisplayTransaction from '../DisplayTransactions/DisplayTransaction';
import setAuthToken from '../../_helper/setAuthToken';

import useTransactions from '../../useTransactions';

function DashboardHome(props) {
  const { user, transactions, getTransactions } = props;
  const { incomeTotal, expenseTotal } = useTransactions(transactions);

  useEffect(() => {
    if (user) {
      const userId = user._id;
      const token = localStorage.getItem('token');
      setAuthToken(token);
      getTransactions(userId);
    }
  }, [user, getTransactions]);

  return (
    <div>
      <Wrapper>
        <div>
          <Cashflow
            availableBalance={incomeTotal - expenseTotal}
            spent={expenseTotal}
            income={incomeTotal}
          />
          <DisplayTransaction />
        </div>
      </Wrapper>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    token: state.auth.token,
    transactions: state.expense.transactions,
  };
};

export default connect(mapStateToProps, {
  getTransactions,
})(DashboardHome);
