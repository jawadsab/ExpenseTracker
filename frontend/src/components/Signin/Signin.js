import React, { useState } from 'react';
import {
  Wrapper,
  SigninWrapper,
  Header,
  HeaderText,
  HeaderSubText,
  FormWrapper,
  FormControl,
  InputLabel,
  Input,
  SubmitButton,
} from './Signin.elements';

import { connect } from 'react-redux';
import { signinAction } from '../../redux/actions/authAction';
import { ErrorMessage } from '../../globalStyles';
import {withRouter,Redirect} from "react-router-dom";

function Signin(props) {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const { email, password} = values;
  const {isAuthenticated,loading,success,errorMessage,signin} = props;
  const handleInputChange = (fieldName) => (event) => {
    setValues({ ...values, [fieldName]: event.target.value });
  };

  //   TODO: signin request
  const onSubmit = (event) => {
    event.preventDefault();
    const userDetails = {email,password};
    signin(userDetails);
    setValues({ ...values, email: '', password: '' });
  };
  return (
    <>
    {isAuthenticated && <Redirect to="/dashboard" />}
      <Wrapper>
        <SigninWrapper>
          <Header>
            <HeaderText>Welcome!</HeaderText>
            <HeaderSubText>Some random text goes here</HeaderSubText>
          </Header>
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          <FormWrapper onSubmit={onSubmit}>
            <FormControl>
              <InputLabel htmlFor="email">Email:</InputLabel>
              <Input
                placeholder="john@email.com"
                type="email"
                id="email"
                onChange={handleInputChange('email')}
                value={email}
              />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="password">Password:</InputLabel>
              <Input
                type="password"
                id="password"
                onChange={handleInputChange('password')}
                value={password}
              />
            </FormControl>
            <FormControl>
              <SubmitButton type="submit">SIGN IN</SubmitButton>
            </FormControl>
          </FormWrapper>
        </SigninWrapper>
      </Wrapper>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    success: state.auth.success,
    errorMessage: state.auth.error,
    loading:state.auth.loading
  };
};

export default connect(mapStateToProps, { signin: signinAction })(withRouter(Signin));
