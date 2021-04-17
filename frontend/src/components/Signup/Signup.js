import React, { useState } from 'react';
import {
  Wrapper,
  SignupWrapper,
  Header,
  HeaderText,
  HeaderSubText,
  FormWrapper,
  FormControl,
  InputLabel,
  Input,
  SubmitButton,
  Subtext,
  SigninLink,
} from './Signup.elements';

import { connect } from 'react-redux';
import { signupAction } from '../../redux/actions/authAction';
import { ErrorMessage, SuccessMessage } from '../../globalStyles';

function Signup(props) {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
  });

  const { username, email, password } = values;
  const { loading, success, error, signup } = props;
  const handleInputChange = (fieldName) => (event) => {
    setValues({ ...values, [fieldName]: event.target.value });
  };

  //   TODO: signup request
  const onSubmit = (event) => {
    event.preventDefault();
    const userDetails = { username, email, password };
    signup(userDetails);
    setValues({ ...values, username: '', email: '', password: '' });
  };

  return (
    <>
      <Wrapper>
        <SignupWrapper>
          <Header>
            <HeaderText>Create Account</HeaderText>
            <HeaderSubText>Signup now, and manage your expenses</HeaderSubText>
          </Header>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <FormWrapper onSubmit={onSubmit}>
            <FormControl>
              <InputLabel htmlFor="username">Username:</InputLabel>
              <Input
                placeholder="john doe"
                type="text"
                id="username"
                onChange={handleInputChange('username')}
                value={username}
              />
            </FormControl>
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
              {!success && <SubmitButton type="submit">SIGN UP</SubmitButton>}
            </FormControl>
          </FormWrapper>
          {success && (
            <SuccessMessage>
              You can now signin <SigninLink to="/signin">here</SigninLink>
            </SuccessMessage>
          )}
          <Subtext>
            Already have an account?{' '}
            <SigninLink to="/signin">Sign in here</SigninLink>
          </Subtext>
        </SignupWrapper>
      </Wrapper>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    success: true,
    error: state.auth.error,
  };
};

export default connect(mapStateToProps, { signup: signupAction })(Signup);
