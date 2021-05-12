import React, { useEffect, useState, useRef } from 'react';
import light from '../../../assets/res_light.png';
import dark from '../../../assets/res_dark.png';
import {
  Wrapper,
  ContentWrapper,
  ContentTitle,
  Span,
  ImgWrapper,
  Light,
  Dark,
} from './Responsive.elements';

function Responsive() {
  const textArray = ['Desktop', 'Tablet', 'Mobile'];
  const [textId, setTextId] = useState(0);
  const [active, setActive] = useState(false);
  const myRef = useRef();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextId((prev) => prev + 1);
    }, 1500);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    function handleScroll() {
      if (myRef.current) {
        const y = myRef.current.getBoundingClientRect().y;
        if (Math.floor(y) <= 0) {
          setActive(true);
        } else {
          setActive(false);
        }
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [myRef]);

  return (
    <Wrapper ref={myRef}>
      <ContentWrapper>
        <ContentTitle>
          And It's Responsive. <br /> Use it on{' '}
          <Span>{textArray[textId % textArray.length]}</Span>
        </ContentTitle>

        <ImgWrapper>
          <Light active={active} src={light} alt="..." />
          <Dark src={dark} alt="..." />
        </ImgWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

export default Responsive;
