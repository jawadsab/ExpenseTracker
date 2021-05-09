import React from 'react';

import {
  Wrapper,
  Title,
  Transactions,
  TransactionInfo,
  TransactionCategory,
  TransactionDate,
  TransactionDesc,
  TransactionAmount,
  Transaction,
  RupeeIcon,
  TransactionType,
} from './Display.elements';

import { connect } from 'react-redux';



import { numberWithCommas, formatDate } from '../../_helper/format';
import SkeletonTransactions from '../skeleton/SkeletonTransactions';
import NoData from '../NoData/NoData';

function DisplayTransaction(props) {
  const { transactions,loading } = props;

  console.log("TRA",transactions);

  return (
    <>
      <Wrapper>
        <Title>ALL TRANSACTIONS</Title>
        <Transactions>
          {
            loading && [1,2,3].map((s,n) => <SkeletonTransactions key={n} />)
          }
      

          { !loading && transactions.map((t, i) => (
            <Transaction key={t._id}>
              <TransactionType transactionType={t.transaction_type}>
                <RupeeIcon />
              </TransactionType>
              <TransactionInfo>
                <TransactionCategory>{t.transaction_cat}</TransactionCategory>
                <TransactionDesc>{t.transaction_desc}</TransactionDesc>
                <TransactionDate>
                  {formatDate(t.transaction_date)}
                </TransactionDate>
              </TransactionInfo>
              <TransactionAmount transactionType={t.transaction_type}>
                {`${t.transaction_type === 'income' ? '+' : '-'}` +
                  numberWithCommas(t.transaction_amt)}
              </TransactionAmount>
            </Transaction>
          ))}
          {
            !transactions.length && <NoData />
          }
        </Transactions>

      </Wrapper>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    transactions: state.expense.transactions,
    loading:state.expense.loading
  };
};

export default connect(mapStateToProps)(DisplayTransaction);
