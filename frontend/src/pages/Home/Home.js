import React from 'react';
import hero_img from '../../assets/hero_img.PNG';
import { Navigation } from '../../components';
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
} from './Home.element';

function Home(props) {
  const { isAuthenticated } = props;
  return (
    <>
      {isAuthenticated && <Redirect to="/dashboard" />}
      {/* <Navigation /> */}
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
            <KnowMore>Know More</KnowMore>
          </ContentInfo>
        </ContentWrapper>
      
      </HeroSection>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps)(Home);
