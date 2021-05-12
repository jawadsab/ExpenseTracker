import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 60vh;
  background: #023e8a;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row-reverse;
`;

export const ContentTitle = styled.h1`
  padding-top: 2rem;
  color: #ecf8f8;
  padding-right: 8px;
  line-height:3rem;
  @media only screen and (max-width: 420px) {
    text-align: center;
  }
`;

export const AddGif = styled.img`
  display: block;
  margin: 48px auto;
  border-radius: 10px;
  box-shadow:3px 8px 16px rgba(0,0,0,0.5);


  @media only screen and (max-width: 420px) {
    width: 300px;
  }
`;

export const Span = styled.span`
  border-bottom: 3px dotted #7400b8;

  color: #03045e;
  background: #caf0f8;
  padding: 8px;
  border-radius: 10px;
`;

export const Dark = styled(Span)`
  background: #03045e;
  border-radius: 10px;
  color: #80ffdb;
`;
