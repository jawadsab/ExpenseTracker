import api from '../../_helper/api';
import setAuthToken from '../../_helper/setAuthToken';
import {
  SUMMARY_LOADED,
  SUMMARY_LOAD_ERROR,
  ADD_TRANSACTION,
  ADD_TRANSACTION_ERROR,
  GET_TRANSACTIONS
} from './actionTypes';

export const loadTransactionSummary = (userId) => {
  return async function (dispatch) {
    const token = localStorage.getItem("token");
    setAuthToken(token);
    try {
      const res = await api.get(`/transactions/${userId}/transaction_summary`);
      dispatch({
        type: SUMMARY_LOADED,
        payload: res.data,
      });
    } catch (error) {
    

      dispatch({
        type: SUMMARY_LOAD_ERROR,
      });
    }
  };
};

export const addTransaction = (userId, transaction) => {
  return async function (dispatch) {
    try {
      const res = await api.post(
        `/transactions/${userId}/add_transaction`,
        transaction
      );
      dispatch({
        type: ADD_TRANSACTION,
        payload: res.data,
      });
     
    } catch (error) {

      dispatch({
        type: ADD_TRANSACTION_ERROR,
      });
    }
  };
};


export const getTransactions = (userId) => {
  return async function(dispatch) {
    try {
      const res = await api.get(`/transactions/${userId}`);
      dispatch({
        type:GET_TRANSACTIONS,
        payload:res.data
      })
    } catch (error) {
      
    }
  }
}
