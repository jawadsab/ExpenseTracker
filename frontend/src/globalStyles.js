import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        padding:0;
        margin:0;
        box-sizing:border-box;
    }
    body {
        font-family: 'Epilogue', sans-serif;
    }
`;
export const PageWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d6e5e3;
`;



export const MessageWrapper = styled.div`
  width: 100%;
  height: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom:1rem;
  border: 2px solid;
  padding:1rem
`;
export default GlobalStyle;
