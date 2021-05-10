import React, { useState } from 'react';
import {
  Background,
  ModalWrapper,
  CloseIcon,
  ModalTitle,
  InputsWrapper,
  InputControl,
  InputLabel,
  InputWrapper,
  RupeeIcon,
  AmountInput,
  AmountSpan,
  SelectCategory,
  SelectOption,
  DescInput,
  AddButton,
  AvlBal
} from './Modal.elements';

import { connect } from 'react-redux';
import { openModal, closeModal } from '../../redux/actions/modalAction';
import { addTransaction } from '../../redux/actions/expenseActions';

import moment from 'moment';

import { incomeCategories, expenseCategories } from '../../categories';
import useTransactions from '../../useTransactions';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { numberWithCommas } from '../../_helper/format';

const initialState = {
  transaction_amt: '',
  transaction_cat: '',
  transaction_type: 'income',
  transaction_desc: '',
};

function Modal(props) {
  const [formData, setFormData] = useState(initialState);

  const { modalActive, closeModal, add, user, transactions } = props;
  const { incomeTotal, expenseTotal } = useTransactions(transactions);
  const { transaction_amt,transaction_cat,transaction_type } = formData;

  const balance = incomeTotal - expenseTotal;

  const selectedCategories =
    formData.transaction_type === 'income'
      ? incomeCategories
      : expenseCategories;

  const notify = () =>
    toast.warn('You do not have sufficient blanace to make this transaction!');
    const notify1 = () =>
    toast.error('Category cannot be left blank');

  const addTransaction = () => {
    console.log({ balance, transaction_amt,transaction_cat,transaction_type });

    if (Number(transaction_amt) > balance && transaction_type === "expense") {
      notify();
    } else {
      if(transaction_cat === "") {
        notify1();
      }
      const transaction = {
        ...formData,
        transaction_amt: Number(formData.transaction_amt),
        dd: moment().date(),
        mm: moment().month(),
        yy: moment().year(),
      };

      add(user._id, transaction);
    }

    setFormData(initialState);
  };
  const close = () => {
    setFormData(initialState);
    closeModal();
  };
  return (
    <>
      {modalActive && (
        <Background>
          <ToastContainer autoClose={3000} />
          <AvlBal>Balance: {numberWithCommas(balance)}</AvlBal>
          <ModalWrapper>
            <CloseIcon onClick={close} />
            <ModalTitle>Add Amount</ModalTitle>
            <InputsWrapper>
              <InputControl>
                <InputLabel>Amount*:</InputLabel>
                <InputWrapper>
                  <RupeeIcon />
                  <AmountInput
                    min="0"
                    type="number"
                    value={formData.transaction_amt}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        transaction_amt: e.target.value,
                      })
                    }
                  />
                  <AmountSpan>INR</AmountSpan>
                </InputWrapper>
              </InputControl>
              <InputControl>
                <InputLabel>Type*:</InputLabel>
                <InputWrapper>
                  <SelectCategory
                    value={formData.transaction_type}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        transaction_type: e.target.value,
                      })
                    }
                  >
                    <SelectOption value="income">Income</SelectOption>
                    <SelectOption value="expense">Expense</SelectOption>
                  </SelectCategory>
                </InputWrapper>
              </InputControl>
              <InputControl>
                <InputLabel>Category*:</InputLabel>
                <InputWrapper>
                  <SelectCategory
                    value={formData.transaction_cat}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        transaction_cat: e.target.value,
                      })
                    }
                  >
                    <SelectOption value="" disabled>
                      Category
                    </SelectOption>
                    {selectedCategories.map((c) => (
                      <SelectOption key={c.type} value={c.type}>
                        {c.type}
                      </SelectOption>
                    ))}
                  </SelectCategory>
                </InputWrapper>
              </InputControl>
              <InputControl>
                <InputLabel>Description:</InputLabel>
                <DescInput
                  type="text"
                  value={formData.transaction_desc}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      transaction_desc: e.target.value,
                    })
                  }
                />
              </InputControl>
              <AddButton onClick={addTransaction}>ADD</AddButton>
            </InputsWrapper>
          </ModalWrapper>
        </Background>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    modalActive: state.modal.active,
    transactions: state.expense.transactions,
    user: state.auth.user,
  };
};

export default connect(mapStateToProps, {
  openModal,
  closeModal,
  add: addTransaction,
})(Modal);
