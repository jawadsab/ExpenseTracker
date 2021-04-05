import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';

export const TransactionWrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: 10px;
  padding: 1rem;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;
export const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffb703;
  cursor: pointer;
  margin-top:1rem;
  
`;
export const AddIcon = styled(FaPlus)``;
