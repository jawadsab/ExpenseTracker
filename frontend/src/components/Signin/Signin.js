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

function Signin() {
  const [values, setValues] = useState({
    email: '',
    password: '',
    success: false,
    error: false,
    loading: false,
  });

  const { email, password, success, error, loading } = values;
  const handleInputChange = (fieldName) => (event) => {
    setValues({ ...values, [fieldName]: event.target.value });
  };

  //   TODO: signin request
  const onSubmit = (event) => {
    event.preventDefault();
    console.log({ email, password });
    setValues({ ...values, email: '', password: '' });
  };
  return (
    <>
      <Wrapper>
        <SigninWrapper>
          <Header>
            <HeaderText>Welcome!</HeaderText>
            <HeaderSubText>Some random text goes here</HeaderSubText>
          </Header>
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

export default Signin;
