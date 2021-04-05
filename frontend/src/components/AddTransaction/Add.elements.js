import styled from 'styled-components';



const handleDisplayCard = (show) => {
    if(show) {
        return "block";
    } else {
        return "none";
    }
}
export const AddTransactionCard = styled.div`
  width: 300px;
  height: auto;
  border-radius: 24px;
  border: 1px solid #ccc;
  padding: 1rem;
  display: ${({show}) => handleDisplayCard(show)};
  background-color:#ffb703;
`;

export const CardHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
`;

export const CardTitle = styled.h3``;

export const SubTextWrapper = styled.div`
  text-align: center;
  width: 100%;
  margin-top: 1rem;
`;

export const SubTitle = styled.h4``;

export const SelectionWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
export const SelectControl = styled.div`
  margin-top: 1rem;
`;
export const SelectLabel = styled.label`
  display: block;
  font-size: 14px;
`;
export const SelectComponent = styled.select`
  width: 100%;
  margin: 8px;
`;

export const OptionComponent = styled.option``;

export const AmountIP = styled.input`
  width: 100%;
  margin: 8px;
`;

export const TextArea = styled.textarea`
    width:100%;
    margin:8px;
    resize:none;
`;

export const AddButton = styled.button`
    width:100%;
    border-radius:24px;
    border:none;
    outline:none;
    padding:8px;
    background-color:#03045e;
    color:#fff;
    cursor: pointer;

`;
