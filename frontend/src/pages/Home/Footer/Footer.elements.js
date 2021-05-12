import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  min-height: 20vh;
  background: hsla(189, 75%, 75%, 1);

  background: linear-gradient(
    0deg,
    hsla(189, 75%, 75%, 1) 26%,
    hsla(190, 76%, 82%, 1) 51%,
    hsla(190, 77%, 88%, 1) 100%
  );

  background: -moz-linear-gradient(
    0deg,
    hsla(189, 75%, 75%, 1) 26%,
    hsla(190, 76%, 82%, 1) 51%,
    hsla(190, 77%, 88%, 1) 100%
  );

  background: -webkit-linear-gradient(
    0deg,
    hsla(189, 75%, 75%, 1) 26%,
    hsla(190, 76%, 82%, 1) 51%,
    hsla(190, 77%, 88%, 1) 100%
  );

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#90E0EF", endColorstr="#ADE8F4", GradientType=1 );

  display:flex;
  justify-content:center;
  align-items:center;
  padding:1rem;


`;

export const Icon = styled.i`

`;

export const CodeIcon = styled(Icon).attrs((props) => ({
  className: 'fas fa-code',
}))`
  
`;

export const Span = styled.span`

    border-bottom:2px dotted #03045e;

`;

export const Link = styled.a`
    text-decoration:none;
    color:black;
    padding:8px;
    border-radius:10px;
    transition:all 0.2s ease-in;
   

    &:hover {
        background-color:#000;
        border-radius:10px;
        color:#fff;
        border-color:#ef476f;
        > ${Span} {
        border-color:#fff;
    }
    }
    
`;


export const FooterText = styled.p`
    font-size:2rem;
    text-align:center;

    @media only screen and (max-width:420px) {
        font-size:1.5rem;
        line-height:2rem;
    }

`;

