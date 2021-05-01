import styled from 'styled-components';

export const CashflowWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const CashflowCard = styled.div`
  width: 70%;
  border: 1px solid #e5e5e5;
  border-radius: 12px;
  padding: 1rem;
  margin-top: 8px;
  background-color: #6930c3;
  color: #e9ecef;

  @media only screen and (max-width: 720px) {
    width: 90%;
  }
`;

export const CardTitle = styled.h2`
  width: 100%;
  border-bottom: 1px solid #dee2ff;

  @media only screen and (max-width: 420px) {
    display: none;
  }
`;
export const CardBody = styled.div`
  display: flex;
`;

export const Content = styled.div`
  width: 50%;
`;

export const Balance = styled(Content)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ContentTitle = styled.h4`
  font-weight: 400;
  margin-top: 1rem;

  @media only screen and (max-width: 420px) {
    margin-top: 0.5rem;
  }
`;

export const Amount = styled.p`
  font-size: 2rem;
  font-weight: bold;
  margin-top: 8px;

  @media only screen and (max-width: 420px) {
    font-size: 1.1rem;
    font-weight: 600;
  }
`;

export const Icon = styled.i``;
export const RupeeIcon = styled(Icon).attrs((props) => ({
  className: 'fas fa-rupee-sign',
}))``;
