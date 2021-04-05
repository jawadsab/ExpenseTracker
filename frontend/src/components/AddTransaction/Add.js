import React from 'react';
import {
  AddTransactionCard,
  CardHeader,
  CardTitle,
  SubTextWrapper,
  SubTitle,
  SelectionWrapper,
  SelectControl,
  SelectLabel,
  SelectComponent,
  OptionComponent,
  AmountIP,
  TextArea,
  AddButton
} from './Add.elements';

function Add({showCard}) {
  return (
    <>
      <AddTransactionCard show={showCard}>
        <CardHeader>
          <CardTitle>Expense Tracker</CardTitle>
        </CardHeader>
        <SubTextWrapper>
          <SubTitle>Available Balance: ${300}</SubTitle>
        </SubTextWrapper>
        <SelectionWrapper>
          <SelectControl>
            <SelectLabel>Type:</SelectLabel>
            <SelectComponent>
              <OptionComponent value="income">income</OptionComponent>
              <OptionComponent value="expense">expense</OptionComponent>
            </SelectComponent>
          </SelectControl>
          <SelectControl>
            <SelectLabel>Category:</SelectLabel>
            <SelectComponent>
              <OptionComponent value="food">food</OptionComponent>
              <OptionComponent value="travel">travel</OptionComponent>
              <OptionComponent value="rent">rent</OptionComponent>
            </SelectComponent>
          </SelectControl>
          <SelectControl>
            <SelectLabel>Description:</SelectLabel>
            <TextArea col="50" rows="5"></TextArea>
          </SelectControl>
          <SelectControl>
            <SelectLabel>Amount:</SelectLabel>
            <AmountIP type="number" />
          </SelectControl>
        </SelectionWrapper>
        <AddButton>Add</AddButton>
      </AddTransactionCard>
    </>
  );
}

export default Add;
