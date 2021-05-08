import React, { useState } from 'react';
import Blob1 from "../../assets/blob1.svg";
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
  CloseIcon,
  BlobOne,
  BlobTwo
} from './Signup.elements';

import { connect } from 'react-redux';
import { signupAction, clearError } from '../../redux/actions/authAction';
import { ErrorMessage } from '../../globalStyles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CustomMessage = ({ closeToast }) => {
  return (
    <span>
      {' '}
      You can now signin <SigninLink to="/signin">here</SigninLink>
    </span>
  );
};

function Signup(props) {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
  });

  const { username, email, password } = values;
  const { success, error, signup, clearError } = props;
  const handleInputChange = (fieldName) => (event) => {
    setValues({ ...values, [fieldName]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const userDetails = { username, email, password };
    signup(userDetails);
    setValues({ ...values, username: '', email: '', password: '' });
  };

  const clear = () => {
   
    clearError();
  };

  const notify = () => {
    toast.success(<CustomMessage />, { autoClose: false });
    <ToastContainer />;
  };

  return (
    <>
      <Wrapper>
        <BlobOne src={Blob1} />
        <BlobTwo src={Blob1} />
        <ToastContainer />
        {success && notify()}
        <SignupWrapper>
          <Header>
            <HeaderText>Create Account</HeaderText>
            <HeaderSubText>Signup now, and manage your expenses</HeaderSubText>
          </Header>
          {error && (
            <ErrorMessage>
              {error}
              <div onClick={clear}>
                <CloseIcon className="fas fa-times" />
              </div>
            </ErrorMessage>
          )}
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
              <SubmitButton type="submit">SIGN UP</SubmitButton>
            </FormControl>
          </FormWrapper>

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
    success: state.auth.success,
    error: state.auth.error,
  };
};

export default connect(mapStateToProps, { signup: signupAction, clearError })(
  Signup
);
