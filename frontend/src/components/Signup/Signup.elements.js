import styled from 'styled-components';
import { PageWrapper, Button } from '../../globalStyles';
import { Link } from 'react-router-dom';

export const Wrapper = styled(PageWrapper)`
  position: relative;
  background: #edf6f9;
`;

export const SignupWrapper = styled.div`
  padding: 1rem;
  width: 400px;
  border-radius: 15px;
  background: #edf2fb;
  border: 1px solid #ccc;
  box-shadow: 0px 8px 16px rgba(0,0,0,0.5);
  z-index:1;
`;

export const Header = styled.div`
  text-align: center;
  width: 100%;
`;

export const HeaderText = styled.h3`
    color:#03045e;
`;

export const HeaderSubText = styled.p`
  padding: 1rem;
  color:#03045e;
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
  color:#03045e;
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

  &:hover {
    filter: brightness(110%);
  }
`;

export const Subtext = styled.span`
  width: 100%;
  text-align: center;
  display: block;
  font-size: 12px;
  margin-top: 14px;
  font-weight: bold;
`;

export const SigninLink = styled(Link)`
  color: #ee6055;
`;

export const CloseIcon = styled.i`
  cursor: pointer;
`;

export const BlobOne = styled.img`
  width: 400px;
  height: 400px;
  transform: rotate(45deg) scale(2);
  position: fixed;
  bottom: -50px;
  left: -60px;
  opacity: 0.2;

  @media only screen and (max-width: 420px) {
    transform: scale(1);
    bottom: -150px;
    left: -160px;
  }
`;

export const BlobTwo = styled.img`
  position: fixed;
  width: 400px;
  height: 400px;
  opacity: 0.2;
  transform: scale(2);
  top: -50px;
  right: -60px;

  @media only screen and (max-width: 420px) {
    transform: scale(1);
    top: -150px;
    right: -160px;
  }
`;
