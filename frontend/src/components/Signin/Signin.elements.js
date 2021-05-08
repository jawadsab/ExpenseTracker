import styled from 'styled-components';
import { PageWrapper, Button } from '../../globalStyles';

export const Wrapper = styled(PageWrapper)`
  background: #edf6f9;
  position: relative;
`;

export const SigninWrapper = styled.div`
  padding: 1rem;
  width: 400px;
  min-height: 420px;
  border-radius: 15px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.5);
  border: 1px solid #ccc;
  background: #edf2fb;
  z-index: 1;
`;

export const Header = styled.div`
  text-align: center;
  width: 100%;
  color: #03045e;
`;

export const HeaderText = styled.h3``;

export const HeaderSubText = styled.p`
  padding: 1rem;
`;

export const FormWrapper = styled.form`
  width: 100%;
`;
export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;
export const InputLabel = styled.label`
  font-size: 14px;
  color: #03045e;
`;
export const Input = styled.input`
  margin-top: 8px;
  padding: 8px;
  border: none;
  outline: none;
  border-bottom: 1px solid #03045e;
  border-radius: 10px;
`;

export const SubmitButton = styled(Button)`
  padding: 8px;
  background-color: #03045e;
  color: #fff;
  font-weight: bold;
  border-radius: 10px;
`;

export const SigninSVG = styled.img`
  position: fixed;
  bottom: 0;
`;

export const CloseIcon = styled.i`
  cursor: pointer;
`;
