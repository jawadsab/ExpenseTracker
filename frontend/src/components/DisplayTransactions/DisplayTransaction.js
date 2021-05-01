import React from 'react';
import {
  Wrapper,
  Title,
  Transactions,
  Transaction,
  TransactionType,
  RupeeIcon,
  TransactionInfo,
  TransactionCategory,
  TransactionDate,
  TransactionDesc,
  TransactionAmount
} from './Display.elements';

import { connect } from 'react-redux';

import useTransactions from '../../useTransactions';

import {numberWithCommas,formatDate} from "../../_helper/format";


function DisplayTransaction(props) {

    
  const { transactions } = props;

  console.log(transactions);

  

 

  const { test } = useTransactions(transactions);

  console.log(test);

  console.log(transactions);
  return (
    <>
      <Wrapper>
        <Title>Recent</Title>
        <Transactions>
          {transactions.map((t, i) => (
            <Transaction key={t._id}>
              <TransactionType transactionType={t.transaction_type}>
                <RupeeIcon />
              </TransactionType>
              <TransactionInfo>
                <TransactionCategory>{t.transaction_cat}</TransactionCategory>
                <TransactionDesc>{t.transaction_desc}</TransactionDesc>
                <TransactionDate>{formatDate(t.transaction_date)}</TransactionDate>
              </TransactionInfo>
              <TransactionAmount transactionType={t.transaction_type}>{`${t.transaction_type === "income" ? "+":"-"}`+ numberWithCommas(t.transaction_amt)}</TransactionAmount>
            </Transaction>
          ))}
        </Transactions>
      </Wrapper>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    transactions: state.expense.transactions,
  };
};

export default connect(mapStateToProps)(DisplayTransaction);
