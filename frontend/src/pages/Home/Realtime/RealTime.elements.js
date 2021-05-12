import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 60vh;
  background: #023e8a;
`;

export const ContentWrapper = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;


`;

export const ContentTitle = styled.h1`
  padding-top: 2rem;
  color: #ecf8f8;
  padding-left:8px;
  line-height:3rem;
  @media only screen and (max-width: 420px) {
   text-align:center;
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
  border-bottom: 3px dotted #03045e;

  color: #03045e;
  background: #ef476f;
  padding: 8px;
  border-radius: 10px;
`;