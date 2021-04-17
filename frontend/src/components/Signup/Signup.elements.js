import styled from "styled-components";
import {PageWrapper,Button} from "../../globalStyles";
import {Link} from "react-router-dom";



export const Wrapper = styled(PageWrapper)`
    background-color:#03045e
`;

export const SignupWrapper = styled.div`
    padding:1rem;
    width:400px;
    min-height: 420px;
    border-radius:15px;
    background:#fff;
`;

export const Header = styled.div`
    text-align:center;
    width:100%;
`;

export const HeaderText = styled.h3``;

export const HeaderSubText = styled.p`
    padding:1rem;
`;

export const FormWrapper = styled.form`
    width:100%;
    
`;
export const FormControl = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:1rem;
`;
export const InputLabel = styled.label`
    font-size:14px;
`;
export const Input = styled.input`
    margin-top:8px;
    padding:8px;
    border:none;
    outline:none;
    border-bottom:1px solid #f72585
`;

export const SubmitButton = styled(Button)`
    padding:8px;
    background-color:#f72585;
    color:#fff;
    font-weight:bold;
`;

export const Subtext = styled.span`
    width:100%;
    text-align:center;
    display:block;
    font-size:12px;
    margin-top:14px;
    font-weight:bold;
`;

export const SigninLink = styled(Link)`
    color:#f72585
`;