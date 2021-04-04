import styled from 'styled-components';
import {MessageWrapper} from "../../globalStyles";

export const AuthWrapper = styled.div`
  border-radius: 24px;
  border:1px solid #ccc;
  padding:1rem;
  background-color:#fff;

  @media only screen and (max-width:420px) {
        margin:12px;
  }
`;

export const AuthHeaderWrapper = styled.div`
    width:100%;
    padding:8px;
    margin-bottom:1rem;
    text-align:center;
`;
export const AuthTitle = styled.h2`
margin-bottom:8px;
`;
export const AuthSubText = styled.span`
    display:block;
    font-size:16px;
`;

export const FormWrapper = styled.form`
    width:100%;
    display:flex;
    flex-direction:column;
`;

export const FormControl = styled.div`
    display:flex;
    flex-direction:column;
    margin-bottom:12px;
`;

export const IpLabel = styled.label`
    margin-bottom:8px;
`;

export const Input = styled.input.attrs(props => ({
    type:props.itype
}))`
    width:100%;
    border:1px solid #ccc;
    border-radius:14px;
    padding:8px;
    outline:none;
`;

export const AuthButton = styled.button.attrs(props => ({
    type:props.submit ? "submit":undefined

}))`
    border-radius: 14px;
    padding: 0.8rem 2rem;
    border:none;
    cursor:pointer;
    margin-top:8px;
    outline:none;

`;

const handleMessageColor = color => {
    switch(color) {
        case "error":
            return "#ba181b";
        case "success":
            return "#234a0d";
        default:
            return "#03045e";
    }
}

const handleMessageWrapper = color => {
    switch(color) {
        case "error":
            return {borderColor:"#ba181b",bgColor:"#f6cacc"};
        case "success":
            return {borderColor:"#234a0d",bgColor:"#d8f3dc"};
        default:
            return {borderColor:"#03045e",bgColor:"#ade8f4"}
    }
}

export const Message = styled.span`
    color: ${({color}) => handleMessageColor(color)};
    font-size:12px;
`;

export const MessageColorWrapper = styled(MessageWrapper)`
    border-color : ${({color}) => handleMessageWrapper(color).borderColor};
    background-color: ${({color}) => handleMessageWrapper(color).bgColor};
`;


