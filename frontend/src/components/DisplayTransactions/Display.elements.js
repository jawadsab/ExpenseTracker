import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1rem;
  margin-top: 1rem;
`;

export const Title = styled.h2`
  color: grey;
`;

export const Transactions = styled.div``;

export const Transaction = styled.div`
  width: 100%;
  background: #fff;
  padding: 1rem;
  margin-top: 8px;
  border-radius: 16px;
  display: flex;
  align-items: center;
`;

const handleTransactiontype = (transactionType) => {
  if (transactionType === 'income') {
    return '#679436';
  } else {
    return '#a31621';
  }
};

export const TransactionType = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ transactionType }) =>
    handleTransactiontype(transactionType)};

  @media only screen and (max-width: 420px) {
    width: 40px;
    height: 40px;
  }
`;

export const Icon = styled.i`
  color: #fff;
`;
export const RupeeIcon = styled(Icon).attrs((props) => ({
  className: 'fas fa-rupee-sign',
}))``;

export const TransactionInfo = styled.div`
  display: flex;
  flex-direction: column;
  /* background:pink; */
  margin-left: 12px;
  flex-grow: 2;
`;

export const TransactionCategory = styled.p`
  font-weight: bold;
  font-size: 1.3rem;
`;
export const TransactionDesc = styled.p`
  font-size: 0.8rem;
  font-weight: bold;
  color: #6c757d;
  margin-top: 8px;
`;
export const TransactionDate = styled.span`
  font-size: 0.7rem;
  margin-top: 8px;
  font-weight: bold;
  color: #adb5bd;
  letter-spacing: 2px;
`;

export const TransactionAmount = styled.p`
  font-weight: bold;
  color: ${({ transactionType }) => handleTransactiontype(transactionType)};
  font-size: 1.5rem;

  @media only screen and (max-width: 420px) {
    font-size: 1.2rem;
  }
`;
