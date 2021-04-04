import React, { useState } from 'react';
import {Link} from "react-router-dom";
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

import { signup } from '../../api';

const Signup = () => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    errorMessage: '',
    success: false,
    loading: false,
  });

  const { username, email, password, errorMessage, success, loading } = values;

  const handleInputChange = (fieldName) => (event) => {
    setValues({
      ...values,
      errorMessage: false,
      success: false,
      loading: false,
      [fieldName]: event.target.value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setValues({ ...values, loading: true });

    const { data } = await signup({ username, email, password });
    if (!data.success) {
      setValues({
        ...values,
        errorMessage: data.msg,
        loading: false,
        success: false,
      });
    } else {
      setValues({...values,success:true,loading:false,username:"",email:"",password:""})
    }
  };

  return (
    <>
      <AuthWrapper>
        <AuthHeaderWrapper>
          <AuthTitle>Sign up</AuthTitle>
          <AuthSubText>Create an account to manage your expenses</AuthSubText>
        </AuthHeaderWrapper>
        {errorMessage && (
          <MessageColorWrapper color="error">
            <Message color="error">{errorMessage}</Message>
          </MessageColorWrapper>
        )}
        <FormWrapper onSubmit={onSubmit}>
          <FormControl>
            <IpLabel htmlFor="username">Username:</IpLabel>
            <Input
              placeholder="John Doe"
              id="username"
              onChange={handleInputChange('username')}
              value={username}
            />
          </FormControl>
          <FormControl>
            <IpLabel htmlFor="email">Email:</IpLabel>
            <Input
              itype="email"
              placeholder="john@email.com"
              id="email"
              onChange={handleInputChange('email')}
              value={email}
            />
          </FormControl>
          <FormControl>
            <IpLabel htmlFor="password">Password:</IpLabel>
            <Input
              itype="password"
              placeholder="min 6 characters."
              id="password"
              onChange={handleInputChange('password')}
              value={password}
            />
          </FormControl>
          {!success && <AuthButton submit>Submit</AuthButton>}
          {success && (
            <MessageColorWrapper color="success">
              <Message color="success" as={Link} to="/signin">Sign in here</Message>
            </MessageColorWrapper>
          )}
        </FormWrapper>
      </AuthWrapper>
    </>
  );
};

export default Signup;
