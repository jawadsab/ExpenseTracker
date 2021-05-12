import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 60vh;
  background: #023e8a;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.h1`
  padding-top: 2rem;
  color: #ecf8f8;
  padding-right: 8px;
  line-height: 3rem;
  @media only screen and (max-width: 420px) {
    text-align: center;
  }
`;

export const Span = styled.a`
  text-decoration: none;
  padding: 8px;
  border-radius: 4px;
  background: #06d6a0;
  color: #ecf8f8;
  border-bottom: 3px dotted #073b4c;
`;

export const Icon = styled.i``;

export const MailIcon = styled(Icon).attrs((props) => ({
  className: 'fas fa-envelope',
}))`
  margin-left: 8px;
`;

export const Heart = styled(Icon).attrs((props) => ({
  className: 'fas fa-heart-broken',
}))`
  margin-left: 8px;
  color: #dd1c1a;
`;
