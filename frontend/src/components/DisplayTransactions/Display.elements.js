import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 1rem;
  padding:8px;
`;

export const Title = styled.h2`
  width:70%;
  margin:0 auto;
  color:${({theme}) => theme.textSecondary};
  @media only screen and (max-width:720px) {
    width:100%;
  }
`;

export const Transactions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 
  
`;

export const Transaction = styled.div`
  width: 70%;
  background: ${({ theme }) => theme.bgSecondary};
  padding: 1rem;
  margin-top: 1.5rem;
  border-radius: 16px;
  display: flex;
  align-items: center;
  box-shadow: ${({theme}) => theme.boxShadow};

  @media only screen and (max-width:720px) {
    width:100%;
  }
`;

const handleTransactiontype = (transactionType) => {
  if (transactionType === 'income') {
    return '#40916C';
  } else {
    return '#D00000';
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
  margin-left: 12px;
  flex-grow: 2;
`;

export const TransactionCategory = styled.p`
  color:${({theme}) => theme.textSecondary};
  font-size: 1.3rem;
`;
export const TransactionDesc = styled.p`
  font-size: 0.8rem;
  color: #6c757d;
  margin-top: 8px;
  color:${({theme}) => theme.textDesc};

`;
export const TransactionDate = styled.span`
  font-size: 0.7rem;
  margin-top: 8px;
  letter-spacing: 2px;
  color:${({theme}) => theme.textSecondary};

`;

export const TransactionAmount = styled.p`
  font-weight: bold;
  color: ${({ transactionType }) => handleTransactiontype(transactionType)};
  font-size: 1.5rem;

  @media only screen and (max-width: 420px) {
    font-size: 1.2rem;
  }
`;


