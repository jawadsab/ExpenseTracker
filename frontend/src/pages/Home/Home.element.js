import styled from 'styled-components';
import { Button } from '../../globalStyles';

export const HeroSection = styled.section`
  min-height: 100vh;
  background: hsla(214, 97%, 27%, 1);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 8px;

  background: hsla(214, 97%, 27%, 1);

  background: linear-gradient(
    0deg,
    hsla(214, 97%, 27%, 1) 19%,
    hsla(201, 100%, 36%, 1) 78%,
    hsla(195, 100%, 39%, 1) 100%
  );

  background: -moz-linear-gradient(
    0deg,
    hsla(214, 97%, 27%, 1) 19%,
    hsla(201, 100%, 36%, 1) 78%,
    hsla(195, 100%, 39%, 1) 100%
  );

  background: -webkit-linear-gradient(
    0deg,
    hsla(214, 97%, 27%, 1) 19%,
    hsla(201, 100%, 36%, 1) 78%,
    hsla(195, 100%, 39%, 1) 100%
  );

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#023E8A", endColorstr="#0077B6", GradientType=1 );

  @media only screen and (max-width: 420px) {
    background: hsla(214, 97%, 27%, 1);

    background: linear-gradient(
      90deg,
      hsla(214, 97%, 27%, 1) 19%,
      hsla(201, 100%, 36%, 1) 78%,
      hsla(195, 100%, 39%, 1) 100%
    );

    background: -moz-linear-gradient(
      90deg,
      hsla(214, 97%, 27%, 1) 19%,
      hsla(201, 100%, 36%, 1) 78%,
      hsla(195, 100%, 39%, 1) 100%
    );

    background: -webkit-linear-gradient(
      90deg,
      hsla(214, 97%, 27%, 1) 19%,
      hsla(201, 100%, 36%, 1) 78%,
      hsla(195, 100%, 39%, 1) 100%
    );

    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#023E8A", endColorstr="#0077B6", GradientType=1 );
  }
`;

export const ContentWrapper = styled.main`
  font-family: 'Montserrat', sans-serif;
`;

export const ContentInfo = styled.div``;

export const MainText = styled.h1`
  color: #fff;
  font-size: 2.5rem;
`;

export const Span = styled.span`
  border-bottom: 2px dotted #90e0ef;
`;

export const Subtext = styled.p`
  color: #ecf8f8;
  font-size: 1.2rem;
  margin-top: 2rem;
  line-height: 1.7rem;
`;

export const KnowMore = styled(Button)`
  padding: 0.9rem 2.5rem;
  border-radius: 8px;
  margin-top: 2rem;
  border: 3px dotted #0096c7;
  color: #fff;
  background: hsla(278, 100%, 36%, 1);
  font-weight:bold;

  background: linear-gradient(
    90deg,
    hsla(278, 100%, 36%, 1) 0%,
    hsla(263, 60%, 48%, 1) 45%,
    hsla(239, 53%, 59%, 1) 100%
  );

  background: -moz-linear-gradient(
    90deg,
    hsla(278, 100%, 36%, 1) 0%,
    hsla(263, 60%, 48%, 1) 45%,
    hsla(239, 53%, 59%, 1) 100%
  );

  background: -webkit-linear-gradient(
    90deg,
    hsla(278, 100%, 36%, 1) 0%,
    hsla(263, 60%, 48%, 1) 45%,
    hsla(239, 53%, 59%, 1) 100%
  );

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#7400B8", endColorstr="#6930C3", GradientType=1 );

  &:hover {
    border: 3px dotted #80ffdb;
    filter:brightness(110%);
  }
`;
export const ImageWrapper = styled.div`
  position: absolute;
  bottom: 0px;
  right: -10px;
  transform: rotate(-10deg);
  overflow: hidden;
`;

export const HeroImage = styled.img`
  width: 500px;
  border-radius: 10px;

  @media only screen and (max-width: 420px) {
    width: 350px;
  }
`;
