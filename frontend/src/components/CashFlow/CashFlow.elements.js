import styled from 'styled-components';

export const CashflowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CashflowCard = styled.div`
  width: 70%;
  border-radius: 16px;
  padding: 1rem;
  margin-top: 8px;
  background-color: ${({ theme }) => theme.bgSecondary};
  color: ${({ theme }) => theme.onAccent};
  box-shadow: ${({ theme }) => theme.boxShadow};

  @media only screen and (max-width: 720px) {
    width: 90%;
  }
`;

export const CardTitle = styled.h2`
  width: 100%;
  color: ${({ theme }) => theme.textSecondary};

  @media only screen and (max-width: 420px) {
    display: none;
  }
`;
export const CardBody = styled.div`
  display: flex;
  color: ${({ theme }) => theme.textSecondary};
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

export const Wrapper = styled.div`
  width: 80vw;
  height: 400px;
  background-color: pink;
`;
