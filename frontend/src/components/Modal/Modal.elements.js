import styled from 'styled-components';
import { Button } from '../../globalStyles';

export const Background = styled.div`
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  width: 550px;
  min-height: 350px;
  background-color: ${({ theme }) => theme.modalBg};
  border-radius: 1rem;
  position: relative;
  padding: 1rem;

  @media only screen and (max-width: 720px) {
    width: 300px;
    min-height: 300px;
  }
`;

export const Icon = styled.i`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

export const CloseIcon = styled(Icon).attrs((props) => ({
  className: 'fas fa-2x fa-times',
}))`
  color: ${({ theme }) => theme.modalTextColor};
`;

export const ModalTitle = styled.h3`
  color: ${({ theme }) => theme.modalTextColor};
`;

export const InputsWrapper = styled.div`
  padding: 1rem;
`;

export const InputControl = styled.div`
  margin-top: 8px;
`;

export const InputLabel = styled.label`
  font-weight: bold;
  color: ${({ theme }) => theme.modalTextColor};
`;
export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const RIcon = styled.i``;
export const RupeeIcon = styled(RIcon).attrs((props) => ({
  className: 'fas fa-rupee-sign',
}))`
  margin-right: 4px;
  color: ${({ theme }) => theme.modalTextColor};
`;

export const AmountInput = styled.input`
  width: 100%;
  padding: 4px;
  border: none;
  border-bottom: 2px solid black;
  outline: none;
  margin-top: 8px;
  background-color: #e9ecef;
`;

export const AmountSpan = styled.span`
  color: #dad4ef;
  font-weight: bold;
  margin-left: 4px;
  color: ${({ theme }) => theme.modalTextColor};
`;

export const SelectCategory = styled.select`
  width: 100%;
  margin-top: 8px;
  padding: 4px;
  background-color: #e9ecef;
`;
export const SelectOption = styled.option`
  background-color: #e9ecef;
`;

export const DescInput = styled.input`
  display: block;
  width: 100%;
  padding: 4px;
  border: none;
  border-bottom: 2px solid black;
  outline: none;
  margin-top: 8px;
  background-color: #e9ecef;
`;

export const AddButton = styled(Button)`
  width: 100%;
  margin-top: 1rem;
  padding: 8px;
  color: #fff;
  background: ${({ theme }) => theme.btnLogout};
`;

export const AvlBal = styled.div`
  color: #fff;
  position: fixed;
  bottom: 10px;
  left: 10px;
  font-size: 2rem;

  @media only screen and (max-width: 420px) {
    font-size: 1.5rem;
  }
`;
