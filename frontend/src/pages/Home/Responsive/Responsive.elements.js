import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 150vh;
  background: #023e8a;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const ContentTitle = styled.h1`
  padding-top: 2rem;
  color: #ecf8f8;
  text-align: center;
  padding-left: 8px;
  line-height: 3rem;
  @media only screen and (max-width: 420px) {
    text-align: center;
  }
`;

export const Span = styled.span`
  border-bottom: 3px dotted #03045e;
  background: #fb8500;
  border-radius: 10px;
  padding: 8px;
  color: #03045e;
`;

export const ImgWrapper = styled.div`
  position: relative;
  margin-top: 3rem;
  /* width:50%; */
  overflow: hidden;
  border-radius: 10px;

  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.5);
`;

const Image = (active) => {
  if(active) {
      return "translateX(50%)";
  } else {
      return "translateX(0%)";
  }
}

export const Light = styled.img`
  position: absolute;
  bottom: 0;
  border-radius: 10px;
  transition: transform 0.3s ease-in;
  transform:${({active}) => Image(active)};
 
`;
export const Dark = styled.img`
  bottom: 0;
  border-radius: 10px;
`;
