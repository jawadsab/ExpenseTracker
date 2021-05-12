import React from 'react';
import hero_img from '../../assets/hero_img.PNG';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import {
  HeroSection,
  ContentWrapper,
  ContentInfo,
  MainText,
  Span,
  Subtext,
  KnowMore,
  ImageWrapper,
  HeroImage,
  BtnWrapper,
  NavbarWrapper,
  NavLogo,
  SignupBtn,
} from './Home.element';
import AddShowcase from './AddTransaction/AddShowcase';
import ViewTransactions from './View/ViewTransactions';
import RealTime from './Realtime/Realtime';
import Toggle from './Toggle/Toggle';
import Responsive from './Responsive/Responsive';
import Footer from './Footer/Footer';

import { animateScroll as scroll } from 'react-scroll';
import Feature from './Feature/Feature';

function Home(props) {
  const { isAuthenticated } = props;
  return (
    <>
      {isAuthenticated && <Redirect to="/dashboard" />}

      <NavbarWrapper>
        <NavLogo onClick={() => scroll.scrollToTop()}>ExpenseTracker</NavLogo>
      </NavbarWrapper>
      <HeroSection>
        <ImageWrapper>
          <HeroImage src={hero_img} alt="..." />
        </ImageWrapper>
        <ContentWrapper>
          <ContentInfo>
            <MainText>
              Track Your <br /> <Span>Expenses</Span> Without Any Hassle
            </MainText>
            <Subtext>
              Use our application to keep an eye on your daily expenses ,
              <br />
              ExpenseTracker interface is easy to use and can be your best
              friend
              <br /> in tracking your expenditure.
            </Subtext>
            <BtnWrapper>
              <KnowMore to="more" smooth={true} duration={1000}>
                Know More
              </KnowMore>
              <SignupBtn to="/signup">Sign Up</SignupBtn>
            </BtnWrapper>
          </ContentInfo>
        </ContentWrapper>
      </HeroSection>
      <AddShowcase />
      <ViewTransactions />
      <RealTime />
      <Toggle />
      <Responsive />
      <Feature />
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps)(Home);
