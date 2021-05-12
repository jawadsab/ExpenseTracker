import React from 'react';
import { FooterWrapper, FooterText, CodeIcon, Span,Link } from './Footer.elements';

function Footer() {
  return (
    <FooterWrapper>
      <FooterText>
        Developed <CodeIcon /> by{' '}
        <Link rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/mohammed-abdul-jawad-vajeeh-376514163/">
          <Span>JawadVajeeh</Span>
        </Link>
      </FooterText>
    </FooterWrapper>
  );
}

export default Footer;
