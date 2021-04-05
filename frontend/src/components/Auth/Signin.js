import React, { useState } from 'react';
import { Redirect,withRouter } from 'react-router-dom';
import {
  AuthWrapper,
  AuthHeaderWrapper,
  AuthTitle,
  AuthSubText,
  FormWrapper,
  FormControl,
  IpLabel,
  Input,
  AuthButton,
  Message,
  MessageColorWrapper,
} from './Auth.elements';
import { signin } from '../../api';

const Signin = (props) => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    errorMessage: '',
    success: false,
    loading: false,
  });
  const { email, password, errorMessage, success, loading } = values;
  const handleInputChange = (fieldName) => (event) => {
    setValues({ ...values, [fieldName]: event.target.value });
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    setValues({ ...values, loading: true });
    const { data } = await signin({ email, password });
    console.log(data);
    if (!data.success) {
      setValues({
        ...values,
        errorMessage: data.msg,
        loading: false,
        success: false,
        email: '',
        password: '',
      });
    } else {
      localStorage.setItem('token', data.token);
      setValues({
        ...values,
        success: true,
        loading: false,
        username: '',
        email: '',
        password: '',
      });
    }
  };
  return (
    <>
      <AuthWrapper>
        <AuthHeaderWrapper>
          <AuthTitle>Sign in</AuthTitle>
          <AuthSubText>Welcome! to expense tracker</AuthSubText>
        </AuthHeaderWrapper>
        {errorMessage && (
          <MessageColorWrapper color="error">
            <Message color="error">{errorMessage}</Message>
          </MessageColorWrapper>
        )}
        <FormWrapper onSubmit={onSubmit}>
          <FormControl>
            <IpLabel htmlFor="email">Email:</IpLabel>
            <Input
              itype="email"
              placeholder="john@gmail.com"
              id="email"
              onChange={handleInputChange('email')}
              value={email}
            />
          </FormControl>
          <FormControl>
            <IpLabel htmlFor="password">Password:</IpLabel>
            <Input
              itype="password"
              placeholder="$%^$"
              id="password"
              onChange={handleInputChange('password')}
              value={password}
            />
          </FormControl>
          <AuthButton>Sign in</AuthButton>
        </FormWrapper>
        {success && props.history.push("/app") }
      </AuthWrapper>
    </>
  );
};

export default withRouter(Signin);
