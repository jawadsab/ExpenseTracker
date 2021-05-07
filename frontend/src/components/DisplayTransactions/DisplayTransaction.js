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

function DisplayTransaction(props) {
  const { transactions } = props;

  return (
    <>
      <Wrapper>
        <Title>ALL TRANSACTIONS</Title>
        <Transactions>
      

          {transactions.map((t, i) => (
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
        </Transactions>

      </Wrapper>

      {/* <DisplaySection>
        <SectionTitle>All Transactions</SectionTitle>
        <AllTransactions>
          {
            transactions.map((t,i) => (
               <Transaction>
                 <TransactionType>
                   <RupeeIcon />
                 </TransactionType>
               </Transaction>
            ))
          }
        </AllTransactions>
      </DisplaySection> */}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    transactions: state.expense.transactions,
  };
};

export default connect(mapStateToProps)(DisplayTransaction);
